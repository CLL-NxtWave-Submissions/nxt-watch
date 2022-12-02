import {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Popup from 'reactjs-popup'

import {dataFetchRequestUrls} from './components/common-module'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

import AppContext from './components/context/AppContext'

import './App.css'

// Wrapper component to check user authentication
// and accordingly render Redirect component to
// navigate to login route or the requested route.
const RouteWithAuthCheck = props => {
  const authTokenForReqAuthorization = Cookies.get('jwt_token')
  let routingComponentBasedOnAuthToken = null

  if (authTokenForReqAuthorization === undefined) {
    routingComponentBasedOnAuthToken = <Redirect to="/login" />
  } else {
    routingComponentBasedOnAuthToken = <Route {...props} />
  }

  return routingComponentBasedOnAuthToken
}

/* App component - Root of the component tree */
class App extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    loginErrorMsg: '',
    videosList: [],
    savedVideoList: [],
    isUserLoggedIn: false,
    isDarkTheme: false,
  }

  onUsernameChange = usernameChangeEvent => {
    const updatedUsername = usernameChangeEvent.target.value

    this.setState({
      username: updatedUsername,
    })
  }

  onPasswordChange = passwordChangeEvent => {
    const updatedPassword = passwordChangeEvent.target.value

    this.setState({
      password: updatedPassword,
    })
  }

  onShowPasswordChange = showPasswordChangeEvent => {
    const showPasswordInputElement = showPasswordChangeEvent.target
    const updatedShowPasswordState = showPasswordInputElement.checked

    this.setState({
      showPassword: updatedShowPasswordState,
    })
  }

  onLoginFormSubmit = async loginSubmitEvent => {
    loginSubmitEvent.preventDefault()

    const {username, password} = this.state
    const loginCredentials = {username, password}

    const loginRequestOptions = {
      method: 'POST',
      body: JSON.stringify(loginCredentials),
    }

    const loginUrl = dataFetchRequestUrls.login
    const loginResponse = await fetch(loginUrl, loginRequestOptions)
    const responseData = await loginResponse.json()

    if (loginResponse.ok) {
      const jwtToken = responseData.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})

      const {history} = this.props
      history.replace('/')
    } else {
      const loginErrorMsg = responseData.error_msg
      this.setState({loginErrorMsg})
    }
  }

  onThemeChange = () =>
    this.setState(prevAppState => ({
      isDarkTheme: !prevAppState.isDarkTheme,
    }))

  updatePartialState = partialStateChangeObject =>
    this.setState(partialStateChangeObject)

  render() {
    const {
      username,
      password,
      showPassword,
      videosList,
      savedVideoList,
      isUserLoggedIn,
      isDarkTheme,
      loginErrorMsg,
    } = this.state

    return (
      <AppContext.Provider
        value={{
          username,
          onUsernameChange: this.onUsernameChange,
          password,
          onPasswordChange: this.onPasswordChange,
          showPassword,
          onShowPasswordChange: this.onShowPasswordChange,
          isUserLoggedIn,
          onLogout: () => {},
          onLoginFormSubmit: this.onLoginFormSubmit,
          videosList,
          savedVideoList,
          onSaveVideo: () => {},
          onUnsaveVideo: () => {},
          isDarkTheme,
          onThemeChange: this.onThemeChange,
          loginErrorMsg,
          updatePartialState: this.updatePartialState,
        }}
      >
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
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default withRouter(App)
