import {
  NavLinksMenuContainer,
  NavLink,
  NavLinkIconContainer,
  NavLinkMenuItemNameContainer,
  NavLinkItem,
  NavLinkMenuItemName,
} from './styledComponents'

import StyledReactIcon from '../StyledReactIcon'

import {navLinksData} from '../../common-module'

import AppContext from '../../context/AppContext'

const NavLinksMenuItem = props => {
  const {itemData} = props
  const {id, url, name, icon} = itemData

  return (
    <AppContext.Consumer>
      {appContextData => {
        const {isDarkTheme, selectedNavItemId} = appContextData
        const isItemSelected = id === selectedNavItemId

        return (
          <NavLinkItem isDarkTheme={isDarkTheme} isSelected={isItemSelected}>
            <NavLink to={url}>
              <NavLinkIconContainer>
                <StyledReactIcon
                  originalReactIcon={icon}
                  isSelected={isItemSelected}
                  isDarkTheme={isDarkTheme}
                />
              </NavLinkIconContainer>

              <NavLinkMenuItemNameContainer>
                <NavLinkMenuItemName
                  isDarkTheme={isDarkTheme}
                  isSelected={isItemSelected}
                >
                  {name}
                </NavLinkMenuItemName>
              </NavLinkMenuItemNameContainer>
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
