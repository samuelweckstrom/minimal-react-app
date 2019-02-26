import React from 'react'
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Home from '../pages/home'
import About from '../pages/about'

const Layout = withRouter(props => (
  <>
    <Navigation />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Switch>
  </>
))

const AppRouter = () => (
  <BrowserRouter>
    <Layout />
  </BrowserRouter>
)

export default AppRouter
