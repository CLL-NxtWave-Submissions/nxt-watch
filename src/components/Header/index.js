import {withRouter} from 'react-router-dom'
import {FaMoon} from 'react-icons/fa'
import {FiSun, FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'

import Cookies from 'js-cookie'

import {
  NxtWatchHeader,
  NxtWatchLogo,
  HeaderActionsContainer,
  HeaderActionItem,
  HeaderActionItemButton,
  UserProfileImg,
  LogoutBtn,
} from './styledComponents'

import AppContext from '../context/AppContext'

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
          <NxtWatchHeader>
            <NxtWatchLogo
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              }
              alt="website logo"
            />

            <HeaderActionsContainer>
              <HeaderActionItem>
                <HeaderActionItemButton type="button" onClick={onThemeChange}>
                  {isDarkTheme ? <FiSun /> : <FaMoon />}
                </HeaderActionItemButton>
              </HeaderActionItem>

              <HeaderActionItem>
                <UserProfileImg
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
                <HeaderActionItemButton>
                  <GiHamburgerMenu />
                </HeaderActionItemButton>
              </HeaderActionItem>

              <HeaderActionItem>
                <LogoutBtn type="button" onClick={onLogout}>
                  Logout
                </LogoutBtn>
                <HeaderActionItemButton>
                  <FiLogOut />
                </HeaderActionItemButton>
              </HeaderActionItem>
            </HeaderActionsContainer>
          </NxtWatchHeader>
        )
      }}
    </AppContext.Consumer>
  )
}

export default withRouter(Header)
