import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import './App.css'

/* Syled Components - Start */

/* For JSX elements in Login component - Start */

const LoginBgContainerLightTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: #ffffff;
`

const LoginBgContainerDarkTheme = styled(LoginBgContainerLightTheme)`
  background-color: #1e293b;
`

const LoginFormContainerLightTheme = styled.form`
  border-radius: 0.6rem;
  box-shadow: 0 0 0.5rem 0 #f9f9f9;
  background-color: #ffffff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const LoginFormContainerDarkTheme = styled(LoginFormContainerLightTheme)`
  background-color: #0f0f0f;
`

const BrandLogo = styled.img`
  height: 3rem;
  width: 3rem;
  margin-bottom: 1rem;
`

const LoginFormInputContainer = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  display: flex;
  flex-direction: column;
`

const LoginFormInputLabelLightTheme = styled.label`
  color: #94a3b8;
  font-size: 1rem;
  font-weight: 600;
  font-family: 'Roboto';
  margin: 0;
  margin-bottom: 0.25rem;
`

const LoginFormInputLabelDarkTheme = styled(LoginFormInputLabelLightTheme)`
  color: #ffffff;
`

const LoginFormInput = styled.input`
  border-radius: 0.4rem;
  border: 0.1rem solid #e2e8f0;
  padding: 0.75rem 1.25rem;
  color: #94a3b8;
  font-size: 1.2rem;
  font-family: 'Roboto';
  margin: 0;
`

const ShowPasswordInputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 0;
`

const ShowPasswordInput = styled.input`
  border-radius: 0.4rem;
  border: 0.1rem solid #616e7c;
  margin: 0;
  margin-right: 0.5rem;
`

const ShowPasswordInputLabelLightTheme = styled.label`
  color: #000000;
  font-size: 1.2rem;
  font-family: 'Roboto';
`

const LoginFormSubmitButton = styled.button`
  background-color: #4f46e5;
  border-radius: 0.8rem;
  padding: 1.5rem;
`

/* For JSX elements in Login component - End */

/* Syled Components - End */

const Login = () => {}
const Home = () => {}
const Trending = () => {}
const Gaming = () => {}
const SavedVideos = () => {}
const NotFound = () => {}
const VideoItemDetails = () => {}

const dataFetchRequestUrls = {
  login: 'https://apis.ccbp.in/login',
  home: 'https://apis.ccbp.in/videos/all?search=',
  trending: 'https://apis.ccbp.in/videos/trending',
  gaming: 'https://apis.ccbp.in/videos/gaming',
  videoItemDetails: 'https://apis.ccbp.in/videos/',
}

const RouteWithAuthCheck = props => {
  const authTokenForReqAuthorization = Cookies.get('nxtWatchAuthToken')
  let routingComponentBasedOnAuthToken = null

  if (authTokenForReqAuthorization === undefined) {
    routingComponentBasedOnAuthToken = <Redirect to="/login" />
  } else {
    routingComponentBasedOnAuthToken = <Route {...props} />
  }

  return routingComponentBasedOnAuthToken
}

class App extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    videosList: [],
    savedVideoList: [],
    searchQuery: '',
    isUserLoggedIn: false,
    isDarkTheme: false,
  }

  render() {
    const {videosList, searchQuery, isUserLoggedIn} = this.state

    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <RouteWithAuthCheck exact path="/" component={Home} />
        <RouteWithAuthCheck exact path="/trending" component={Trending} />
        <RouteWithAuthCheck exact path="/gaming" component={Gaming} />
        <RouteWithAuthCheck
          exact
          path="/saved-videos"
          component={SavedVideos}
        />
        <RouteWithAuthCheck
          exact
          path="/videos/:id"
          component={VideoItemDetails}
        />
        <RouteWithAuthCheck exact path="/not-found" component={NotFound} />
        <Redirect path="/not-found" />
      </Switch>
    )
  }
}

export default App
