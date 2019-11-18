import React from 'react';
import './index.css'
import IntroLogo from '../../components/IntroLogo/index'
import AuthForm from '../../components/AuthForm/index'

import ContactInfo from '../../components/ContactInfo/index'


function LoginPage() {
  return (
    <div className='page-login'>

      <div className='logo-container'>
        <IntroLogo/>
      </div>

      <div className='content'>

        <div className='greeting'>
          <h1>Welcome to <span className='important'>FriendShell</span>!</h1>
          <h3>Please, log in: </h3>
        </div>

        <AuthForm/>

        <div className='info'>
          <h1>Some interesting info</h1>
          <p> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu 
            fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
        </div>

        <ContactInfo/>

      </div>

    </div>
  );
}

export default LoginPage;
