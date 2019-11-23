import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import {
  changeLoginText,
  changeEmailText,
  changePasswordText,
  changeThunkHasErrored,
  changeThunkIsLoading
} from '../../store/registration/actions'

class RegForm extends Component {
  constructor(props) {
    super(props)

    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleGoToSignIn = this.handleGoToSignIn.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleLoginChange(event) {
    this.props.changeLoginText(event.target.value)
  }

  handleEmailChange(event) {
    this.props.changeEmailText(event.target.value)
  }

  handlePasswordChange(event) {
    this.props.changePasswordText(event.target.value)
  }

  handleKeyDown(event) {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
      switch (event.target) {
        case this.loginInput:
          this.emailInput.focus()
          break
        case this.emailInput:
          this.passwordInput.focus()
          break
        case this.passwordInput:
          this.handleEnter()
          break
        default:
          break
      }
    }
  }

  handleGoToSignIn(event) {

  }

  handleEnter(event) {
    console.log('ENTER!')
  }

  //ref attributes
  render() {
    let message = ''

    if (this.props.hasErrored) {
      message = 'ERROR'
    }

    if (this.props.isLoading) {
      message = 'is loading....'
    }

    return (
      <div>
        <div
          className='form'>
          <p>{message}</p>
          <h1>Registration</h1>
          <h3>Please enter your details below and click <span class='important'>Sign up</span> button!</h3>
          <h3>Login:</h3>
          <input
            ref={(loginInput) => { this.loginInput = loginInput }}
            className='login-fld'
            type='login'
            placeholder='anonimus2009'
            onKeyDown={this.handleKeyDown}
            onChange={this.handleLoginChange}
            value={this.props.login}></input>
          <h3>E-mail:</h3>
          <input
            ref={(emailInput) => { this.emailInput = emailInput }}
            className='email-fld'
            type='email'
            placeholder='kiberfrog@gmail.com'
            onKeyDown={this.handleKeyDown}
            onChange={this.handleEmailChange}
            value={this.props.email}></input>
          <h3>Password:</h3>
          <input
            ref={(passwordInput) => { this.passwordInput = passwordInput }}
            className='password-fld'
            type='password'
            placeholder='*********'
            onKeyDown={this.handleKeyDown}
            onChange={this.handlePasswordChange}
            value={this.props.password}></input>
          <button
            type=''
            className='enter-btn'>Sign Up!</button>
          <h3> If you have an account, sign in:</h3>
          <Link
            to='/auth'
            className='login-btn'
            onClick={this.handleGoToSignIn}>I have an account</Link>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      login: state.reg.login,
      email: state.reg.email,
      password: state.reg.password,
      hasErrored: state.reg.thunk.hasErrored,
      isLoading: state.reg.thunk.isLoading
    }
  },
  (dispatch) => {
    return {
      changeLoginText: (login) => {
        dispatch(changeLoginText(login))
      },
      changeEmailText: (email) => {
        dispatch(changeEmailText(email))
      },
      changePasswordText: (password) => {
        dispatch(changePasswordText(password))
      },
      changeThunkHasErrored: () => {
        dispatch(changeThunkHasErrored())
      },
      changeThunkIsLoading: () => {
        dispatch(changeThunkIsLoading())
      }
    }
  })(RegForm)