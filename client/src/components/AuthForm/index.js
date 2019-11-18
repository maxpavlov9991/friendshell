import React from 'react';
import './style.css'


function AuthForm() {
  return (
    <form  className='login-form'>
        <input id='login' className='login-fld' type='login' placeholder='Login or e-mail'></input>
        <input id='password' className='password-fld' type='password' placeholder='Password'></input>
        <button id='enter' className='enter-btn'> Enter </button>
        <span className='text'> If you haven't an account, please, register:</span>
        <button id='register' className='register-btn'> Register </button>
    </form>
  );
}

export default AuthForm;