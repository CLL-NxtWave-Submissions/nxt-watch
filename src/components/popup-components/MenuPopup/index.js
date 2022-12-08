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
              <MenuPopupCloseButton
                type="button"
                onClick={popupCloseHandler}
                isDarkTheme={isDarkTheme}
              >
                <IconContext.Provider value={{height: '2rem', width: '2rem'}}>
                  <MdClose />
                </IconContext.Provider>
              </MenuPopupCloseButton>
            </MenuPopupCloseContainer>

            <MenuPopupContentContainer>
              <NavLinksMenu popupCloseHandler={popupCloseHandler} />
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
