import {
  LogoutPopupBgContainer,
  LogoutPopupContainer,
  LogoutPopupMessage,
  LogoutPopupButtonsContainer,
  LogoutPopupButton,
} from './styledComponents'

import AppContext from '../../context/AppContext'

const popupMessage = 'Are you sure you want to logout?'

const LogoutPopup = props => {
  const {logoutHandler, logoutCancelHandler} = props

  return (
    <AppContext.Consumer>
      {appContextData => {
        const {isDarkTheme} = appContextData

        return (
          <LogoutPopupBgContainer>
            <LogoutPopupContainer isDarkTheme={isDarkTheme}>
              <LogoutPopupMessage isDarkTheme={isDarkTheme}>
                {popupMessage}
              </LogoutPopupMessage>
              <LogoutPopupButtonsContainer>
                <LogoutPopupButton
                  type="button"
                  onClick={logoutCancelHandler}
                  isDarkTheme={isDarkTheme}
                  isOutlineButton
                >
                  Cancel
                </LogoutPopupButton>
                <LogoutPopupButton
                  type="button"
                  onClick={logoutHandler}
                  isDarkTheme={isDarkTheme}
                >
                  Confirm
                </LogoutPopupButton>
              </LogoutPopupButtonsContainer>
            </LogoutPopupContainer>
          </LogoutPopupBgContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default LogoutPopup
