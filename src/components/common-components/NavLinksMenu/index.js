import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

import {
  NavLinksMenuContainer,
  NavLinkItem,
  NavLinksMenuItemButton,
  NavLinksMenuItemName,
} from './styledComponents'

import AppContext from '../../context/AppContext'

const navLinksData = [
  {
    id: 'home',
    url: '/',
    name: 'Home',
    icon: AiFillHome,
  },
  {
    id: 'trending',
    url: '/trending',
    name: 'Trending',
    icon: HiFire,
  },
  {
    id: 'gaming',
    url: '/gaming',
    name: 'Gaming',
    icon: SiYoutubegaming,
  },
  {
    id: 'saved-videos',
    url: '/saved-videos',
    name: 'Saved Videos',
    icon: BiListPlus,
  },
]

const NavLinksMenuItem = props => {
  const {itemData} = props
  const {id, name, icon} = itemData

  return (
    <AppContext.Consumer>
      {appContextData => {
        const {isDarkTheme, selectedNavItemId, onNavItemSelect} = appContextData
        const isItemSelected = id === selectedNavItemId

        return (
          <NavLinkItem isDarkTheme={isDarkTheme} isSelected={isItemSelected}>
            <NavLinksMenuItemButton
              type="button"
              onClick={() => onNavItemSelect(id)}
            >
              {icon}
              <NavLinksMenuItemName
                isDarkTheme={isDarkTheme}
                isSelected={isItemSelected}
              >
                {name}
              </NavLinksMenuItemName>
            </NavLinksMenuItemButton>
          </NavLinkItem>
        )
      }}
    </AppContext.Consumer>
  )
}

const NavLinksMenu = () => (
  <AppContext.Consumer>
    {appContextData => {
      const {isDarkTheme} = appContextData

      return (
        <NavLinksMenuContainer isDarkTheme={isDarkTheme}>
          {navLinksData.map(navLinkItemData => (
            <NavLinksMenuItem
              key={navLinkItemData.id}
              itemData={navLinkItemData}
            />
          ))}
        </NavLinksMenuContainer>
      )
    }}
  </AppContext.Consumer>
)

export default NavLinksMenu
