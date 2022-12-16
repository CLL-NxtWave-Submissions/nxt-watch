import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {apiRequestStates, navLinksData} from '../../common-module'
import Header from '../Header'
import LeftNavBar from '../LeftNavBar'

import AppContext from '../../context/AppContext'

export default class GenericRoutedComponent extends Component {
  state = {
    apiRequestState: apiRequestStates.loading,
    searchQuery: '',
    videosList: [],
  }

  async componentDidMount() {
    const {searchQuery} = this.state
    const {baseAPIUrl, routeName} = this.props
    const nxtWatchAuthToken = Cookies.get('jwt_token')

    const apiRequestUrl =
      routeName === 'Home' ? `${baseAPIUrl}${searchQuery}` : `${baseAPIUrl}`

    const apiResponse = await this.getAPIResponse(
      apiRequestUrl,
      nxtWatchAuthToken,
    )

    let updatedHomeComponentState = {}

    // Decode the content of cloned response, for
    // later check on successful request
    const responseArrayBuffer = await apiResponse.clone().arrayBuffer()
    const responseUint8ArrayView = new Uint8Array(responseArrayBuffer)
    const responseStringCharArr = []
    responseUint8ArrayView.forEach(charCodeArrayElement => {
      const stringChar = String.fromCharCode(charCodeArrayElement)
      responseStringCharArr.push(stringChar)
    })

    if (
      apiResponse.ok &&
      responseStringCharArr[0] ===
        '{' /* Check if object was returned, opposed to error html page with response starting with '<' */
    ) {
      const apiResponseData = await apiResponse.json()
      const videosDataList = apiResponseData.videos
      updatedHomeComponentState = {
        apiRequestState: apiRequestStates.success,
        videosList: videosDataList,
      }
    } else {
      updatedHomeComponentState = {
        apiRequestState: apiRequestStates.failure,
      }
    }

    this.setState(updatedHomeComponentState)
  }

  getAPIResponse = async (requestUrl, authToken) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    }
    const apiResponse = await fetch(requestUrl, requestOptions)
    return apiResponse
  }

  onSearchSubmit = () => {}

  getNavLinkId = () => {
    const {routeName} = this.props

    return navLinksData.find(
      navLinksDataItem => navLinksDataItem.name === routeName,
    ).id
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderEmptySearchUI = () => <h1>Empty Search</h1>

  renderVideosList = videoDataList => (
    <ul>
      {videoDataList.map(videoDataListItem => (
        <li key={videoDataListItem.id}>{videoDataListItem.title}</li>
      ))}
    </ul>
  )

  renderDataFetchFailureUI = () => <h1>Error fetching home videos data !</h1>

  render() {
    const navLinkIdOfLoadedComponent = this.getNavLinkId()

    return (
      <AppContext.Consumer>
        {appContextData => {
          const {isDarkTheme} = appContextData

          const {apiRequestState, searchQuery, videosList} = this.state
          let finalUI = null

          if (apiRequestState === apiRequestStates.loading) {
            finalUI = this.renderLoader()
          } else if (apiRequestState === apiRequestStates.success) {
            if (videosList.length === 0) {
              finalUI = this.renderEmptySearchUI()
            } else {
              finalUI = this.renderVideosList(videosList)
            }
          } else if (apiRequestState === apiRequestStates.failure) {
            finalUI = this.renderDataFetchFailureUI()
          }

          return (
            <>
              <Header />
              <>
                <LeftNavBar />
              </>
              {finalUI}
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
