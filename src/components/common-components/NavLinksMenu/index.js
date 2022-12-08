import {
  NavLinksMenuContainer,
  NavLinkItem,
  NavLinksMenuItemButton,
  NavLinksMenuItemName,
} from './styledComponents'

import {navLinksData} from '../../common-module'

import AppContext from '../../context/AppContext'

const NavLinksMenuItem = props => {
  const {itemData, popupCloseHandler} = props
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
              onClick={() =>
                popupCloseHandler === undefined
                  ? onNavItemSelect(id)
                  : onNavItemSelect(id) && popupCloseHandler()
              }
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
