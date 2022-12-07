import {
  NavLinksMenuContainer,
  NavLinkItem,
  NavLinksMenuItemButton,
  NavLinksMenuItemName,
} from './styledComponents'

import {navLinksData} from '../../common-module'

import AppContext from '../../context/AppContext'

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
