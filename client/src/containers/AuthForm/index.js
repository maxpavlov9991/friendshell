import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import {
  setStatusIsLoading,
  setStatusHasErrored,
  setStatusNormal,
  setMessage
} from '../../store/authorization/actions'

class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSignIn = this.handleSignIn.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleKeyDown(event) {
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

  async handleSignIn(event){
    try {

      this.props.setMessage('')
      this.props.setStatusIsLoading()

      const userInfo = {
        login: this.loginInput.value,
        password: this.passwordInput.value
      }

      const response = await fetch('http://localhost:9000/auth/log_in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userInfo)
      })
      const user = await response.json()
      if (!response.ok) {
        this.props.setMessage('The username or password you entered is not correct')
        throw new Error('Response is not OK')
      } else {
        console.log(user)
        //localStorage.setItem('id_token', user.id_token)
        //localStorage.setItem('access_token', user.access_token)
        this.props.setStatusNormal()
        this.props.setMessage('Successfuly!')
      }
    } catch (err){
      this.props.setStatusHasErrored()
      console.log(err)
    }
  }

  render() {
    return (
      <div
        className='form'>
        <h1>Account Log In</h1>
        <h3>Please enter your account details below and click <span class='important'>Log in</span> button!</h3>
        <h3>Login:</h3>
        <input
          ref={(loginInput) => { this.loginInput = loginInput }}
          className='login-fld'
          type='login'
          placeholder='electroturtle123'
          onKeyDown={this.handleKeyDown}></input>
        <h3>Password:</h3>
        <input
          ref={(passwordInput) => { this.passwordInput = passwordInput }}
          className='password-fld'
          type='password'
          placeholder='********'
          onKeyDown={this.handleKeyDown}></input>
        <button
          type=''
          className='enter-btn'
          onClick={this.handleSignIn}> Log In! </button>
        <h1>{this.props.message}</h1>
        <h3> If you haven't an account, please, register:</h3>
        <Link
          to='/register'
          className='register-btn'>Create an account</Link>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      status: state.auth.status,
      message: state.auth.message
    }
  },
  (dispatch) => {
    return {
      setStatusIsLoading: () => {
        dispatch(setStatusIsLoading())
      },
      setStatusHasErrored: () => {
        dispatch(setStatusHasErrored())
      },
      setStatusNormal: () => {
        dispatch(setStatusNormal())
      },
      setMessage: (message) => {
        dispatch(setMessage(message))
      }
    }
  })(AuthForm)