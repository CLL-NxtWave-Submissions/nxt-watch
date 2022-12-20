import GenericRoutedComponent from '../common-components/GenericRoutedComponent'
import NavLinkContext from '../context/NavLinkContext'
import {navLinksData} from '../common-module'

const trendingAPIUrl = 'https://apis.ccbp.in/videos/trending'

const Trending = () => {
  const trendingNavLinkId = navLinksData.find(
    navLinkDataItem => navLinkDataItem.name === 'Trending',
  ).id

  return (
    <NavLinkContext.Provider
      value={{
        activeNavLinkId: trendingNavLinkId,
      }}
    >
      <GenericRoutedComponent baseAPIUrl={trendingAPIUrl} />
    </NavLinkContext.Provider>
  )
}

export default Trending
