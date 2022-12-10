import {IconContext} from 'react-icons'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

// Possible state of a fetch API request
export const apiRequestStates = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  loading: 'LOADING',
}

// Component to style passed in react icon as a prop
const StyledReactIcon = props => {
  const {originalReactIcon} = props

  return (
    <IconContext.Provider value={{style: {height: '2rem', width: '2rem'}}}>
      {originalReactIcon}
    </IconContext.Provider>
  )
}

// Nav links data list
export const navLinksData = [
  {
    id: 'home',
    url: '/',
    name: 'Home',
    icon: <StyledReactIcon originalReactIcon={<AiFillHome />} />,
  },
  {
    id: 'trending',
    url: '/trending',
    name: 'Trending',
    icon: <StyledReactIcon originalReactIcon={<HiFire />} />,
  },
  {
    id: 'gaming',
    url: '/gaming',
    name: 'Gaming',
    icon: <StyledReactIcon originalReactIcon={<SiYoutubegaming />} />,
  },
  {
    id: 'saved-videos',
    url: '/saved-videos',
    name: 'Saved Videos',
    icon: <StyledReactIcon originalReactIcon={<BiListPlus />} />,
  },
]
