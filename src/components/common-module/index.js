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

// Nav links data list
export const navLinksData = [
  {
    id: 'home',
    url: '/',
    name: 'Home',
    icon: AiFillHome,
  },
  {
    id: 'trending',
    url: '/trending',
    name: 'Trending',
    icon: HiFire,
  },
  {
    id: 'gaming',
    url: '/gaming',
    name: 'Gaming',
    icon: SiYoutubegaming,
  },
  {
    id: 'saved-videos',
    url: '/saved-videos',
    name: 'Saved Videos',
    icon: BiListPlus,
  },
]
