import React from 'react'

/* App context with managed state and methods,
   to be updated with context.Provider in a root
   component, which can then be accessible through
   context.Consumer in different child components */
const AppContext = React.createContext({
  isDarkTheme: false,
  onThemeChange: () => {},
  selectedNavItemId: '',
  onNavItemSelect: () => {},
})

export default AppContext
