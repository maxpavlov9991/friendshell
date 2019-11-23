import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import {
  changeLoginText,
  changePasswordText,
  changeThunkHasErrored,
  changeThunkIsLoading
} from '../../store/authorization/actions'

class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleLoginChange(event) {
    this.props.changeLoginText(event.target.value)
  }

  handlePasswordChange(event) {
    this.props.changePasswordText(event.target.value)
  }

  handleKeyDown(event) {
    console.log(event.keyCode)
    if (event.keyCode === 13) {
      switch (event.target) {
        case this.loginInput:
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

  handleEnter(event) {
    console.log('ENTER!!')
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
      <div
        className='form'>
        <p>{message}</p>
        <h1>Account Log In</h1>
        <h3>Please enter your account details below and click <span class='important'>Log in</span> button!</h3>
        <h3>Login:</h3>
        <input
          ref={(loginInput) => { this.loginInput = loginInput }}
          className='login-fld'
          type='login'
          placeholder='electroturtle123'
          onKeyDown={this.handleKeyDown}
          onChange={this.handleLoginChange}
          value={this.props.login}></input>
        <h3>Password:</h3>
        <input
          ref={(passwordInput) => { this.passwordInput = passwordInput }}
          className='password-fld'
          type='password'
          placeholder='********'
          onKeyDown={this.handleKeyDown}
          onChange={this.handlePasswordChange}
          value={this.props.password}></input>
        <button
          type=''
          className='enter-btn'> Log In! </button>
        <h3> If you haven't an account, please, register:</h3>
        <Link
          to='/register'
          className='register-btn'
          onClick={this.handleEnter}>Create an account</Link>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      login: state.auth.login,
      password: state.auth.password,
      hasErrored: state.auth.thunk.hasErrored,
      isLoading: state.auth.thunk.isLoading
    }
  },
  (dispatch) => {
    return {
      changeLoginText: (login) => {
        dispatch(changeLoginText(login))
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
  })(AuthForm)