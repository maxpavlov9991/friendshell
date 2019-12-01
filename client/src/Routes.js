import React from 'react'
import { Provider } from 'react-redux'
import { Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { Router } from "react-router";

import AuthPage from './pages/AuthPage/index'
import MainPage from './pages/MainPage/index'

import store from './store/index'

const history = createBrowserHistory()

export default () => (
  <Provider store={store}>
    <Router history={history} basename="/">
        <Switch>
          <Route exact={true} path="/" render={() => (
            <Redirect to='/main' />
          )} />
          <Route path="/auth" component={AuthPage}/>
          <Route path="/main" component={MainPage}/>
        </Switch>
    </Router>
  </Provider>
);