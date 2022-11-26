import React, {Component} from 'react'
import {Switch, Route, Redirect, withRouter} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import './App.css'

// Urls for requesting data necessary to render
// content UI for different routes.
const dataFetchRequestUrls = {
  login: 'https://apis.ccbp.in/login',
  home: 'https://apis.ccbp.in/videos/all?search=',
  trending: 'https://apis.ccbp.in/videos/trending',
  gaming: 'https://apis.ccbp.in/videos/gaming',
  videoItemDetails: 'https://apis.ccbp.in/videos/',
}

/* App context with managed state and methods,
   to be updated with context.Provider in a root
   component, which can then be accessible through
   context.Consumer in different child components */
const AppContext = React.createContext({
  username: '',
  onUsernameChange: () => {},
  password: '',
  onPasswordChange: () => {},
  showPassword: false,
  onShowPasswordChange: () => {},
  isUserLoggedIn: false,
  onLogout: () => {},
  onLoginFormSubmit: () => {},
  videosList: [],
  savedVideoList: [],
  onSaveVideo: () => {},
  onUnsaveVideo: () => {},
  searchQuery: '',
  onSearchSubmit: () => {},
  isDarkTheme: false,
  onThemeChange: () => {},
})

/* Syled Components - Start */

/* For JSX elements in Login component - Start */

const LoginBgContainerLightTheme = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.5rem;
  background-color: #ffffff;
  height: 100%;
  min-height: 100vh;
`

const LoginBgContainerDarkTheme = styled(LoginBgContainerLightTheme)`
  background-color: #313131;
`

const LoginFormContainerLightTheme = styled.form`
  border-radius: 0.6rem;
  box-shadow: 0 0 0.5rem 0.5rem #f4f4f4;
  background-color: #ffffff;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media (min-width: 450px) {
    width: 95%;
  }

  @media (min-width: 500px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 60%;
    padding: 2.5rem;
  }

  @media (min-width: 892px) {
    width: 48%;
  }

  @media (min-width: 992px) {
    width: 45%;
  }

  @media (min-width: 1192px) {
    width: 40%;
  }

  @media (min-width: 1245px) {
    width: 35%;
  }
`

const LoginFormContainerDarkTheme = styled(LoginFormContainerLightTheme)`
  background-color: #0f0f0f;
  box-shadow: none;
`

const BrandLogo = styled.img`
  height: 3.5rem;
  width: 12rem;
  margin-bottom: 3.5rem;
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
  margin-top: 0.5rem;
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
  align-self: flex-start;
  margin-left: 0;
  margin-top: 0.35rem;
`

const ShowPasswordInput = styled.input`
  border-radius: 0.4rem;
  border: 0.1rem solid #616e7c;
  margin: 0;
  margin-right: 0.5rem;
  width: 1rem;
  height: 1rem;
`

const ShowPasswordInputLabelLightTheme = styled.label`
  color: #000000;
  font-size: 1.2rem;
  font-family: 'Roboto';
`

const ShowPasswordInputLabelDarkTheme = styled(
  ShowPasswordInputLabelLightTheme,
)`
  color: #ffffff;
`

const LoginFormSubmitButton = styled.button`
  color: #ffffff;
  background-color: #3b82f6;
  border-radius: 0.6rem;
  padding: 0.8rem;
  align-self: stretch;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 550;
  margin-top: 2.5rem;
`

/* For JSX elements in Login component - End */

/* Syled Components - End */

/* Composable React Components - Start */

const Login = () => (
  <AppContext.Consumer>
    {appContextData => {
      const {
        username,
        password,
        showPassword,
        onUsernameChange,
        onPasswordChange,
        onShowPasswordChange,
        onLoginFormSubmit,
        isDarkTheme,
      } = appContextData

      return isDarkTheme ? (
        <LoginBgContainerDarkTheme>
          <LoginFormContainerDarkTheme onSubmit={onLoginFormSubmit}>
            <BrandLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png" />
            <LoginFormInputContainer>
              <LoginFormInputLabelDarkTheme htmlFor="input-username">
                USERNAME
              </LoginFormInputLabelDarkTheme>
              <LoginFormInput
                id="input-username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={onUsernameChange}
              />
            </LoginFormInputContainer>

            <LoginFormInputContainer>
              <LoginFormInputLabelDarkTheme htmlFor="input-password">
                PASSWORD
              </LoginFormInputLabelDarkTheme>
              <LoginFormInput
                id="input-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              />
            </LoginFormInputContainer>

            <ShowPasswordInputContainer>
              <ShowPasswordInput
                id="show-password"
                type="checkbox"
                onChange={onShowPasswordChange}
                checked={showPassword}
              />
              <ShowPasswordInputLabelDarkTheme>
                Show Password
              </ShowPasswordInputLabelDarkTheme>
            </ShowPasswordInputContainer>

            <LoginFormSubmitButton type="submit">Login</LoginFormSubmitButton>
          </LoginFormContainerDarkTheme>
        </LoginBgContainerDarkTheme>
      ) : (
        <LoginBgContainerLightTheme>
          <LoginFormContainerLightTheme onSubmit={onLoginFormSubmit}>
            <BrandLogo src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png" />
            <LoginFormInputContainer>
              <LoginFormInputLabelLightTheme htmlFor="input-username">
                USERNAME
              </LoginFormInputLabelLightTheme>
              <LoginFormInput
                id="input-username"
                type="text"
                placeholder="Username"
                value={username}
                onChange={onUsernameChange}
              />
            </LoginFormInputContainer>

            <LoginFormInputContainer>
              <LoginFormInputLabelLightTheme htmlFor="input-password">
                PASSWORD
              </LoginFormInputLabelLightTheme>
              <LoginFormInput
                id="input-password"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={onPasswordChange}
              />
            </LoginFormInputContainer>

            <ShowPasswordInputContainer>
              <ShowPasswordInput
                id="show-password"
                type="checkbox"
                onChange={onShowPasswordChange}
                checked={showPassword}
              />
              <ShowPasswordInputLabelLightTheme htmlFor="show-password">
                Show Password
              </ShowPasswordInputLabelLightTheme>
            </ShowPasswordInputContainer>

            <LoginFormSubmitButton type="submit">Login</LoginFormSubmitButton>
          </LoginFormContainerLightTheme>
        </LoginBgContainerLightTheme>
      )
    }}
  </AppContext.Consumer>
)

const Home = () => {}
const Trending = () => {}
const Gaming = () => {}
const SavedVideos = () => {}
const NotFound = () => {}
const VideoItemDetails = () => {}

// Wrapper component to check user authentication
// and accordingly render Redirect component to
// navigate to login route or the requested route.
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

/* App component - Root of the component tree */
class App extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    loginErrorMsg: '',
    videosList: [],
    savedVideoList: [],
    searchQuery: '',
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
    const updatedShowPasswordState = !showPasswordInputElement.checked

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
      Cookies.set('nxtWatchAuthToken', jwtToken, {expires: 30})

      const {history} = this.props
      history.replace('/')
    } else {
      const loginErrorMsg = responseData.error_msg
      this.setState({loginErrorMsg})
    }
  }

  render() {
    const {
      username,
      password,
      showPassword,
      videosList,
      savedVideoList,
      searchQuery,
      isUserLoggedIn,
      isDarkTheme,
      loginErrorMsg,
    } = this.state

    return (
      <AppContext.Provider
        value={{
          username,
          onUsernameChange: () => {},
          password,
          onPasswordChange: () => {},
          showPassword,
          onShowPasswordChange: () => {},
          isUserLoggedIn,
          onLogout: () => {},
          onLoginFormSubmit: () => {},
          videosList,
          savedVideoList,
          onSaveVideo: () => {},
          onUnsaveVideo: () => {},
          searchQuery,
          onSearchSubmit: () => {},
          isDarkTheme,
          onThemeChange: () => {},
          loginErrorMsg,
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
          <Redirect path="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default withRouter(App)
