import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {apiRequestStates} from '../common-module'
import Header from '../common-components/Header'

import AppContext from '../context/AppContext'

const homeAPIBaseUrl = 'https://apis.ccbp.in/videos/all?search='

export default class Home extends Component {
  state = {
    apiRequestState: apiRequestStates.loading,
    searchQuery: '',
    videosList: [],
  }

  async componentDidMount() {
    const {searchQuery} = this.state
    const nxtWatchAuthToken = Cookies.get('jwt_token')
    const homeAPIRequestUrl = `${homeAPIBaseUrl}${searchQuery}`

    const homeAPIResponse = await this.getAPIResponse(
      homeAPIRequestUrl,
      nxtWatchAuthToken,
    )

    let updatedHomeComponentState = {}

    // Decode the content of cloned response, for
    // later check on successful request
    const responseArrayBuffer = await homeAPIResponse.clone().arrayBuffer()
    const responseUint8ArrayView = new Uint8Array(responseArrayBuffer)
    const responseStringCharArr = []
    responseUint8ArrayView.forEach(arrayElement => {
      const stringChar = String.fromCharCode(arrayElement)
      responseStringCharArr.push(stringChar)
    })

    if (
      homeAPIResponse.ok &&
      responseStringCharArr[0] ===
        '{' /* Check if object was returned, opposed to error html page with response starting with '<' */
    ) {
      const homeAPiResponseData = await homeAPIResponse.json()
      const homeVideosList = homeAPiResponseData.videos
      updatedHomeComponentState = {
        apiRequestState: apiRequestStates.success,
        videosList: homeVideosList,
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
              {finalUI}
            </>
          )
        }}
      </AppContext.Consumer>
    )
  }
}
