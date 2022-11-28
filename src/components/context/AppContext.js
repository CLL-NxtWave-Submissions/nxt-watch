import React from 'react'

/* App context with managed state and methods,
   to be updated with context.Provider in a root
   component, which can then be accessible through
   context.Consumer in different child components */
const AppContext = React.createContext({
  username: '',
  onUsernameChange: () => {},
  password: '',
  onPasswordChange: () => {},
  showPassword: false,
  onShowPasswordChange: () => {},
  isUserLoggedIn: false,
  onLogout: () => {},
  onLoginFormSubmit: () => {},
  videosList: [],
  savedVideoList: [],
  onSaveVideo: () => {},
  onUnsaveVideo: () => {},
  searchQuery: '',
  onSearchSubmit: () => {},
  isDarkTheme: false,
  onThemeChange: () => {},
  apiRequestStates: {},
  apiRequestState: '',
  updatePartialState: () => {},
})

export default AppContext
