import {Component} from 'react'
import styled from 'styled-components'
import {Switch, Route, Redirect} from 'react-router-dom'
import Popup from 'reactjs-popup'

import './App.css'

const Login = () => {}
const Home = () => {}
const Trending = () => {}
const Gaming = () => {}
const SavedVideos = () => {}
const NotFound = () => {}
const VideoItemDetails = () => {}

const App = () => (
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

export default App
