import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {BiListPlus} from 'react-icons/bi'

// Urls for requesting data necessary to render
// content UI for different routes.
export const dataFetchRequestUrls = {
  login: 'https://apis.ccbp.in/login',
  home: 'https://apis.ccbp.in/videos/all?search=',
  trending: 'https://apis.ccbp.in/videos/trending',
  gaming: 'https://apis.ccbp.in/videos/gaming',
  videoItemDetails: 'https://apis.ccbp.in/videos/',
}

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
