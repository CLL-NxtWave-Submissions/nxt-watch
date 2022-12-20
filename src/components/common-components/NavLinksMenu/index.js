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
import NavLinkContext from '../../context/NavLinkContext'

const NavLinksMenuItem = props => {
  const {itemData, insideLeftNavBar} = props
  const {id, url, name, icon} = itemData

  return (
    <NavLinkContext.Consumer>
      {navLinkContextData => {
        const {activeNavLinkId} = navLinkContextData
        const isItemSelected = id === activeNavLinkId

        return (
          <AppContext.Consumer>
            {appContextData => {
              const {isDarkTheme} = appContextData

              return (
                <NavLinkItem
                  isDarkTheme={isDarkTheme}
                  isSelected={isItemSelected}
                >
                  <NavLink to={url}>
                    {insideLeftNavBar ? (
                      <>
                        <StyledReactIcon
                          originalReactIcon={icon}
                          isSelected={isItemSelected}
                          isDarkTheme={isDarkTheme}
                        />

                        <NavLinkMenuItemName
                          isDarkTheme={isDarkTheme}
                          isSelected={isItemSelected}
                        >
                          {name}
                        </NavLinkMenuItemName>
                      </>
                    ) : (
                      <>
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
                      </>
                    )}
                  </NavLink>
                </NavLinkItem>
              )
            }}
          </AppContext.Consumer>
        )
      }}
    </NavLinkContext.Consumer>
  )
}

const NavLinksMenu = props => {
  const {insideLeftNavBar} = props

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
                insideLeftNavBar={insideLeftNavBar}
              />
            ))}
          </NavLinksMenuContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

export default NavLinksMenu
