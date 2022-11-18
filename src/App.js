import {Component} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Popup from 'reactjs-popup'
import styled from 'styled-components'

import './App.css'

const Login = () => {}
const Home = () => {}
const Trending = () => {}
const Gaming = () => {}
const SavedVideos = () => {}
const NotFound = () => {}
const VideoItemDetails = () => {}

class App extends Component {
  state = {
    videosList: [],
    searchQuery: '',
    isUserLoggedIn: false,
  }

  render() {
    const {videosList, searchQuery, isUserLoggedIn} = this.state

    return (
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route exact path="/trending" component={Trending} />
        <Route exact path="/gaming" component={Gaming} />
        <Route exact path="/saved-videos" component={SavedVideos} />
        <Route exact path="/videos/{id}" component={VideoItemDetails} />
        <Route exact path="/not-found" component={NotFound} />
        <Redirect path="/not-found" />
      </Switch>
    )
  }
}

export default App
