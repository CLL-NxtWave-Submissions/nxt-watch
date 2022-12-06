import {withRouter} from 'react-router-dom'
import {IconContext} from 'react-icons'
import Popup from 'reactjs-popup'

import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import Cookies from 'js-cookie'

import LogoutPopup from '../../popup-components/LogoutPopup'

import {
  NxtWatchHeader,
  NxtWatchLogoLink,
  NxtWatchLogo,
  HeaderActionsContainer,
  HeaderActionItem,
  HeaderActionItemButton,
  UserProfileImg,
  LogoutBtn,
} from './styledComponents'

import AppContext from '../../context/AppContext'

const Header = props => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }

  return (
    <AppContext.Consumer>
      {nxtWatchContextData => {
        const {isDarkTheme, onThemeChange} = nxtWatchContextData

        return (
          <NxtWatchHeader isDarkTheme={isDarkTheme}>
            <NxtWatchLogoLink to="/">
              <NxtWatchLogo
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                }
                alt="website logo"
              />
            </NxtWatchLogoLink>

            <HeaderActionsContainer>
              <HeaderActionItem>
                <HeaderActionItemButton
                  type="button"
                  onClick={onThemeChange}
                  isDarkTheme={isDarkTheme}
                >
                  <IconContext.Provider
                    value={{style: {height: '2rem', width: '2rem'}}}
                  >
                    {isDarkTheme ? <FiSun /> : <FaMoon />}
                  </IconContext.Provider>
                </HeaderActionItemButton>
              </HeaderActionItem>

              <HeaderActionItem>
                <UserProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HeaderActionItemButton
                  type="button"
                  onClick={() => {}}
                  isDarkTheme={isDarkTheme}
                  isMobileHeaderActionButton
                >
                  <IconContext.Provider
                    value={{style: {height: '2rem', width: '2rem'}}}
                  >
                    <GiHamburgerMenu />
                  </IconContext.Provider>
                </HeaderActionItemButton>
              </HeaderActionItem>

              <HeaderActionItem>
                <Popup
                  modal
                  trigger={
                    <LogoutBtn
                      type="button"
                      onClick={onLogout}
                      isDarkTheme={isDarkTheme}
                    >
                      Logout
                    </LogoutBtn>
                  }
                >
                  <LogoutPopup />
                </Popup>

                <Popup
                  modal
                  trigger={
                    <HeaderActionItemButton
                      type="button"
                      onClick={onLogout}
                      isDarkTheme={isDarkTheme}
                      isMobileHeaderActionButton
                    >
                      <IconContext.Provider
                        value={{style: {height: '2rem', width: '2rem'}}}
                      >
                        <FiLogOut />
                      </IconContext.Provider>
                    </HeaderActionItemButton>
                  }
                >
                  <LogoutPopup />
                </Popup>
              </HeaderActionItem>
            </HeaderActionsContainer>
          </NxtWatchHeader>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
