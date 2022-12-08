import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'

import Login from './components/Login'
import Home from './components/Home'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import SavedVideos from './components/SavedVideos'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

import {navLinksData} from './components/common-module'

import AppContext from './components/context/AppContext'

import './App.css'

// Wrapper component to check user authentication
// and accordingly render Redirect component to
// navigate to login route or the requested route.
const RouteWithAuthCheck = props => {
  const authTokenForReqAuthorization = Cookies.get('jwt_token')
  let routingComponentBasedOnAuthToken = null

  if (authTokenForReqAuthorization === undefined) {
    routingComponentBasedOnAuthToken = <Redirect to="/login" />
  } else {
    routingComponentBasedOnAuthToken = <Route {...props} />
  }

  return routingComponentBasedOnAuthToken
}

/* App component - Root of the component tree */
class App extends Component {
  state = {
    isDarkTheme: false,
    selectedNavItemId: navLinksData[0].id,
  }

  onThemeChange = () =>
    this.setState(prevAppState => ({
      isDarkTheme: !prevAppState.isDarkTheme,
    }))

  onNavItemSelect = inputNavItemId =>
    this.setState({
      selectedNavItemId: inputNavItemId,
    })

  render() {
    const {isDarkTheme, selectedNavItemId} = this.state

    return (
      <AppContext.Provider
        value={{
          isDarkTheme,
          onThemeChange: this.onThemeChange,
          selectedNavItemId,
          onNavItemSelect: this.onNavItemSelect,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <RouteWithAuthCheck exact path="/" component={Home} />
          <RouteWithAuthCheck exact path="/trending" component={Trending} />
          <RouteWithAuthCheck exact path="/gaming" component={Gaming} />
          <RouteWithAuthCheck
            exact
            path="/saved-videos"
            component={SavedVideos}
          />
          <RouteWithAuthCheck
            exact
            path="/videos/:id"
            component={VideoItemDetails}
          />
          <RouteWithAuthCheck exact path="/not-found" component={NotFound} />
          <Redirect to="/not-found" />
        </Switch>
      </AppContext.Provider>
    )
  }
}

export default App
