import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createHistory } from 'history'

import AuthPage from './pages/AuthPage/index'
import MainPage from './pages/MainPage/index'

import store from './store/index'

export default () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
     
        <Route exact path="/" component={AuthPage}/>
        <Route exact path="/main" component={MainPage}/>

    </BrowserRouter>
  </Provider>
);