import GenericRoutedComponent from '../common-components/GenericRoutedComponent'
import NavLinkContext from '../context/NavLinkContext'
import {navLinksData} from '../common-module'

const gamingAPIUrl = 'https://apis.ccbp.in/videos/gaming'

const SavedVideos = () => {
  const savedVideosNavLinkId = navLinksData.find(
    navLinkDataItem => navLinkDataItem.name === 'Saved Videos',
  ).id

  return (
    <NavLinkContext.Provider
      value={{
        activeNavLinkId: savedVideosNavLinkId,
      }}
    >
      <GenericRoutedComponent baseAPIUrl={gamingAPIUrl} />
    </NavLinkContext.Provider>
  )
}

export default SavedVideos
