import Popup from 'reactjs-popup'
import {IconContext} from 'react-icons'
import {MdClose} from 'react-icons/md'

import NavLinksMenu from '../../common-components/NavLinksMenu'
import {
  MenuPopupBgContainer,
  MenuPopupCloseContainer,
  MenuPopupCloseButton,
  MenuPopupContentContainer,
} from './styledComponents'

import AppContext from '../../context/AppContext'

const PopupUI = props => {
  const {popupCloseHandler} = props

  return (
    <AppContext.Consumer>
      {appContextData => {
        const {isDarkTheme} = appContextData

        return (
          <MenuPopupBgContainer isDarkTheme={isDarkTheme}>
            <MenuPopupCloseContainer>
              <MenuPopupCloseButton type="button" onClick={popupCloseHandler}>
                <IconContext.Provider
                  value={{
                    style: {
                      width: '2rem',
                      height: '2rem',
                      color: `${isDarkTheme ? '#ffffff' : '#0f0f0f'}`,
                    },
                  }}
                >
                  <MdClose />
                </IconContext.Provider>
              </MenuPopupCloseButton>
            </MenuPopupCloseContainer>

            <MenuPopupContentContainer>
              <NavLinksMenu />
            </MenuPopupContentContainer>
          </MenuPopupBgContainer>
        )
      }}
    </AppContext.Consumer>
  )
}

const MenuPopup = props => {
  const {popupTrigger} = props

  return (
    <Popup modal trigger={popupTrigger}>
      {close => <PopupUI popupCloseHandler={close} />}
    </Popup>
  )
}

export default MenuPopup
