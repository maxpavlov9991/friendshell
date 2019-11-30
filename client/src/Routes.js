import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Router } from "react-router";

import AuthPage from './pages/AuthPage/index'
import MainPage from './pages/MainPage/index'
import UserPage from './pages/UserPage/index'

import store from './store/index'

const history = createBrowserHistory()

export default () => (
  <Provider store={store}>
    <Router history={history} basename="/">
        <Switch>
          <Route exact path="/main" component={MainPage}/>
          <Route path="/auth" component={AuthPage}/>
          <Route path="/user" component={UserPage}/>
        </Switch>
    </Router>
  </Provider>
);