import React from 'react';
import './style.css'
import AuthForm from '../../containers/AuthForm'
import RegForm from '../../containers/RegForm'
import { Route, Redirect, Switch } from 'react-router-dom'


import IntroLogo from '../../components/IntroLogo/index'
import ContactInfo from '../../components/ContactInfo/index'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

function AuthPage() {
  return (
    <div>
      <div className='auth-page'>

        <div className='animated-logo'>
          <IntroLogo />
        </div>

        <div className='content'>

          <div className='greeting'>
            <h1>Welcome to <span className='important'>FriendShell</span>!</h1>
          </div>

          <Route exact={true} path="/" render={() => (
            <Redirect to='/auth' />
          )} />
          <Route path="/auth" component={AuthForm} />
          <Route path="/register" component={RegForm} />

          <div className='info'>
            <h1>About the developer</h1>
            <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
          </div>

          <ContactInfo />

        </div>
      </div>
    </div>
  )
}

export default AuthPage;
