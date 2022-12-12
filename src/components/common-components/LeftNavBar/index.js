import {LeftNavBarBgContainer} from './styledComponents'
import NavLinksMenu from '../NavLinksMenu'

import AppContext from '../../context/AppContext'

const LeftNavBar = () => (
  <AppContext.Consumer>
    {appContextData => {
      const {isDarkTheme} = appContextData

      return (
        <LeftNavBarBgContainer isDarkTheme={isDarkTheme}>
          <NavLinksMenu insideLeftNavBar />
        </LeftNavBarBgContainer>
      )
    }}
  </AppContext.Consumer>
)

export default LeftNavBar
