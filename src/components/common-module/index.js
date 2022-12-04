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
