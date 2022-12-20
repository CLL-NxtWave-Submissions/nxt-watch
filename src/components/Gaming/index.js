import GenericRoutedComponent from '../common-components/GenericRoutedComponent'
import NavLinkContext from '../context/NavLinkContext'
import {navLinksData} from '../common-module'

const gamingAPIUrl = 'https://apis.ccbp.in/videos/gaming'

const Gaming = () => {
  const gamingNavLinkId = navLinksData.find(
    navLinkDataItem => navLinkDataItem.name === 'Gaming',
  ).id

  return (
    <NavLinkContext.Provider
      value={{
        activeNavLinkId: gamingNavLinkId,
      }}
    >
      <GenericRoutedComponent baseAPIUrl={gamingAPIUrl} />
    </NavLinkContext.Provider>
  )
}

export default Gaming
