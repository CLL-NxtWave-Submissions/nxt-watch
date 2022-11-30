import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'

import {dataFetchRequestUrls, apiRequestStates} from '../common-module'
import {NxtWatchHeader} from '../common-styled-components/styledComponents'

import AppContext from '../context/AppContext'

export default class Home extends Component {
  state = {
    apiRequestState: apiRequestStates.initial,
    searchQuery: '',
  }

  componentDidMount() {}

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

  render() {
    return (
      <AppContext.Consumer>
        {async appContextData => {
          const {
            isDarkTheme,
            searchQuery,
            onSearchSubmit,
            apiRequestState,
            updatePartialState,
            videosList,
            apiRequestStates,
          } = appContextData

          let finalUI = null

          if (apiRequestState !== apiRequestStates.loading) {
            updatePartialState({apiRequestState: apiRequestStates.loading})
            finalUI = (
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height="50"
                  width="50"
                />
              </div>
            )
          } else if (apiRequestState === apiRequestStates.loading) {
            const jwtToken = Cookies.get('jwt_token')
            const homeAPIRequestUrl = `dataFetchRequestUrls.home${searchQuery}`

            const homeAPIResponse = await this.getAPIResponse(
              homeAPIRequestUrl,
              jwtToken,
            )

            if (homeAPIResponse.ok) {
              const homeVideosData = await homeAPIResponse.json()
              console.log(homeVideosData)
              updatePartialState({
                apiRequestState: apiRequestStates.success,
                videosList: homeVideosData.videos,
              })
            } else {
              updatePartialState({
                apiRequestState: apiRequestStates.failure,
              })
            }

            finalUI = (
              <div className="loader-container" data-testid="loader">
                <Loader
                  type="ThreeDots"
                  color="#ffffff"
                  height="50"
                  width="50"
                />
              </div>
            )
          } else if (apiRequestState === apiRequestStates.success) {
            finalUI = <h1>Success</h1>
          } else if (apiRequestState === apiRequestStates.failure) {
            finalUI = <h1>Error fetching home videos data !</h1>
          }

          return finalUI
        }}
      </AppContext.Consumer>
    )
  }
}
