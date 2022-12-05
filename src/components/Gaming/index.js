import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../common-components/Header'

import AppContext from '../context/AppContext'
import {apiRequestStates} from '../common-module'

const gamingAPIUrl = 'https://apis.ccbp.in/videos/gaming'

export default class Gaming extends Component {
  state = {
    videosList: [],
    apiRequestState: apiRequestStates.loading,
  }

  componentDidMount() {
    this.getVideosList()
  }

  getVideosList = async () => {
    const nxtWatchAuthToken = Cookies.get('jwt_token')
    const gamingAPIRequestOptions = {
      method: 'GET',
      Authorization: `Bearer ${nxtWatchAuthToken}`,
    }

    const gamingAPIResponse = await fetch(gamingAPIUrl, gamingAPIRequestOptions)
    if (gamingAPIResponse.ok) {
      const gamingAPIResponseData = await gamingAPIResponse.json()
      const gamingVideosList = gamingAPIResponseData.videos
      this.setState({
        videosList: gamingVideosList,
        apiRequestState: apiRequestStates.success,
      })
    } else {
      this.setState({
        apiRequestState: apiRequestStates.failure,
      })
    }
  }

  renderLoader = () => (
    <div className="loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </div>
  )

  renderGamingVideosList = gamingVideosList => (
    <>
      <Header />
      <ul>
        {gamingVideosList.map(videoListItem => (
          <li key={videoListItem.id}>{videoListItem.title}</li>
        ))}
      </ul>
    </>
  )

  renderDataFetchFailureUI = () => <h1>Error fetching home videos data !</h1>

  render() {
    const {videosList, apiRequestState} = this.state

    return (
      <AppContext.Consumer>
        {appContextData => {
          const {isDarkTheme} = appContextData

          let finalUI = null

          if (apiRequestState === apiRequestStates.loading) {
            finalUI = this.renderLoader()
          } else if (apiRequestState === apiRequestStates.success) {
            finalUI = this.renderGamingVideosList(videosList)
          } else if (apiRequestState === apiRequestStates.failure) {
            finalUI = this.renderDataFetchFailureUI()
          }

          return finalUI
        }}
      </AppContext.Consumer>
    )
  }
}
