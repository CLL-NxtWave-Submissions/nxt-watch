import GenericRoutedComponent from '../common-components/GenericRoutedComponent'
import NavLinkContext from '../context/NavLinkContext'
import {navLinksData} from '../common-module'

const homeAPIBaseUrl = 'https://apis.ccbp.in/videos/all?search='

const Home = () => {
  const homeNavLinkId = navLinksData.find(
    navLinkDataItem => navLinkDataItem.name === 'Home',
  ).id

  return (
    <NavLinkContext.Provider
      value={{
        activeNavLinkId: homeNavLinkId,
      }}
    >
      <GenericRoutedComponent baseAPIUrl={homeAPIBaseUrl} />
    </NavLinkContext.Provider>
  )
}

export default Home
