import {Component} from 'react'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import AppContext from '../context/AppContext'
import {
  LoginBgContainerDarkTheme,
  LoginFormContainerDarkTheme,
  BrandLogo,
  LoginFormInputContainer,
  LoginFormInputLabelDarkTheme,
  LoginFormInput,
  ShowPasswordInputContainer,
  ShowPasswordInput,
  ShowPasswordInputLabelDarkTheme,
  LoginFormSubmitButton,
  LoginErrorMsg,
  LoginBgContainerLightTheme,
  LoginFormContainerLightTheme,
  LoginFormInputLabelLightTheme,
  ShowPasswordInputLabelLightTheme,
} from './styledComponents'

export default class Login extends Component {
  render() {
    const nxtWatchAuthToken = Cookies.get('jwt_token')

    const redirectToHome = <Redirect to="/" />
    const loginUI = (
      <AppContext.Consumer>
        {appContextData => {
          const {
            username,
            password,
            showPassword,
            loginErrorMsg,
            onUsernameChange,
            onPasswordChange,
            onShowPasswordChange,
            onLoginFormSubmit,
            isDarkTheme,
          } = appContextData

          return isDarkTheme ? (
            <LoginBgContainerDarkTheme>
              <LoginFormContainerDarkTheme onSubmit={onLoginFormSubmit}>
                <BrandLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png"
                  alt="website logo"
                />
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

                <LoginFormSubmitButton type="submit">
                  Login
                </LoginFormSubmitButton>

                {loginErrorMsg !== '' && (
                  <LoginErrorMsg>*{loginErrorMsg}</LoginErrorMsg>
                )}
              </LoginFormContainerDarkTheme>
            </LoginBgContainerDarkTheme>
          ) : (
            <LoginBgContainerLightTheme>
              <LoginFormContainerLightTheme onSubmit={onLoginFormSubmit}>
                <BrandLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
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

                <LoginFormSubmitButton type="submit">
                  Login
                </LoginFormSubmitButton>

                {loginErrorMsg !== '' && (
                  <LoginErrorMsg>*{loginErrorMsg}</LoginErrorMsg>
                )}
              </LoginFormContainerLightTheme>
            </LoginBgContainerLightTheme>
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
