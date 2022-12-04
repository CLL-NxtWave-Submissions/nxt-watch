import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import AppContext from '../context/AppContext'
import {
  LoginBgContainer,
  LoginFormContainer,
  BrandLogo,
  LoginFormInputContainer,
  LoginFormInputLabel,
  LoginFormInput,
  ShowPasswordInputContainer,
  ShowPasswordInput,
  ShowPasswordInputLabel,
  LoginFormSubmitButton,
  LoginErrorMsg,
} from './styledComponents'

const loginUrl = 'https://apis.ccbp.in/login'

export default class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    loginErrorMsg: '',
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

  render() {
    const {username, password, showPassword, loginErrorMsg} = this.state
    const nxtWatchAuthToken = Cookies.get('jwt_token')

    const redirectToHome = <Redirect to="/" />
    const loginUI = (
      <AppContext.Consumer>
        {appContextData => {
          const {isDarkTheme} = appContextData

          return (
            <LoginBgContainer isDarkTheme={isDarkTheme}>
              <LoginFormContainer
                onSubmit={this.onLoginFormSubmit}
                isDarkTheme={isDarkTheme}
              >
                <BrandLogo
                  src={
                    isDarkTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                  }
                  alt="website logo"
                />
                <LoginFormInputContainer>
                  <LoginFormInputLabel
                    htmlFor="input-username"
                    isDarkTheme={isDarkTheme}
                  >
                    USERNAME
                  </LoginFormInputLabel>
                  <LoginFormInput
                    id="input-username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={this.onUsernameChange}
                  />
                </LoginFormInputContainer>

                <LoginFormInputContainer>
                  <LoginFormInputLabel
                    htmlFor="input-password"
                    isDarkTheme={isDarkTheme}
                  >
                    PASSWORD
                  </LoginFormInputLabel>
                  <LoginFormInput
                    id="input-password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    value={password}
                    onChange={this.onPasswordChange}
                  />
                </LoginFormInputContainer>

                <ShowPasswordInputContainer>
                  <ShowPasswordInput
                    id="show-password"
                    type="checkbox"
                    onChange={this.onShowPasswordChange}
                    checked={showPassword}
                  />
                  <ShowPasswordInputLabel isDarkTheme={isDarkTheme}>
                    Show Password
                  </ShowPasswordInputLabel>
                </ShowPasswordInputContainer>

                <LoginFormSubmitButton type="submit">
                  Login
                </LoginFormSubmitButton>

                {loginErrorMsg !== '' && (
                  <LoginErrorMsg>*{loginErrorMsg}</LoginErrorMsg>
                )}
              </LoginFormContainer>
            </LoginBgContainer>
          )
        }}
      </AppContext.Consumer>
    )

    let finalUI = null

    if (nxtWatchAuthToken === undefined) {
      // Not logged in or auth token expired
      finalUI = loginUI
    } else {
      // already logged in with a valid auth token
      finalUI = redirectToHome
    }

    return finalUI
  }
}
