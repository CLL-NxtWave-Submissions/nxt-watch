import {
  NavLinksMenuContainer,
  NavLink,
  NavLinkItem,
  NavLinksMenuItemButton,
  NavLinksMenuItemName,
} from './styledComponents'

import {navLinksData} from '../../common-module'

import AppContext from '../../context/AppContext'

const NavLinksMenuItem = props => {
  const {itemData, popupCloseHandler} = props
  const {id, url, name, icon} = itemData

  return (
    <AppContext.Consumer>
      {appContextData => {
        const {isDarkTheme, selectedNavItemId, onNavItemSelect} = appContextData
        const isItemSelected = id === selectedNavItemId

        return (
          <NavLinkItem isDarkTheme={isDarkTheme} isSelected={isItemSelected}>
            <NavLink to={url}>
              {icon}
              <NavLinksMenuItemName
                isDarkTheme={isDarkTheme}
                isSelected={isItemSelected}
              >
                {name}
              </NavLinksMenuItemName>
            </NavLink>
          </NavLinkItem>
        )
      }}
    </AppContext.Consumer>
  )
}

const NavLinksMenu = props => {
  const {popupCloseHandler} = props

  return (
    <AppContext.Consumer>
      {appContextData => {
        const {isDarkTheme} = appContextData

        return (
          <NavLinksMenuContainer isDarkTheme={isDarkTheme}>
            {navLinksData.map(navLinkItemData => (
              <NavLinksMenuItem
                key={navLinkItemData.id}
                itemData={navLinkItemData}
                popupCloseHandler={popupCloseHandler}
              />
            ))}
          </NavLinksMenuContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default NavLinksMenu
