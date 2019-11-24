import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import {
  setStatusIsLoading,
  setStatusFailed,
  setStatusNormal,
  setMessage
} from '../../store/authorization/actions'

import {
  userAuthSetMyInfo
} from '../../store/user/actions'

class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleLogIn = this.handleLogIn.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
    this.props.setMessage('')
    this.props.setStatusNormal()
  }

  handleKeyDown(event) {
    if (event.keyCode === 13 || event.keyCode === 38 || event.keyCode === 40) {
      switch (event.target) {
        case this.loginInput:
          if (event.keyCode === 13 || event.keyCode === 40) {this.passwordInput.focus()}
          else {this.loginInput.blur()}
          break
        case this.passwordInput:
            if (event.keyCode === 13) {this.handleLogIn()}
            else if (event.keyCode === 40) {this.passwordInput.blur()}
            else {this.loginInput.focus()}
          break
        default:
          break
      }
    }
  }

  async handleLogIn(event) {
    try {
      this.props.setMessage('')
      this.props.setStatusIsLoading()

      const userInfo = {
        login: this.loginInput.value,
        password: this.passwordInput.value
      }

      const response = await fetch('http://localhost:9000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userInfo)
      })

      if (response.status !== 200) {
        this.props.setStatusFailed()
        this.props.setMessage('Error')
        throw new Error(response.message)
      }

      const res = await response.json()

      if (!res.success) {
        console.log(res)
        this.props.setStatusFailed()
        this.props.setMessage(res.message)
      } else {
        //localStorage.setItem('id_token', user.id_token)
        //localStorage.setItem('access_token', user.access_token)
        this.props.userAuthSetMyInfo(res.body) //Положить всё в store
        this.props.setStatusNormal() 
        this.props.setMessage('Successfuly!')
        //Загрузить main
      }
    } catch(err) {
    console.log(err)
  }
}

render() {
  return (
    <div
      className='form'>
      <h1>Account Log In</h1>
      <h3>Please enter your account details below and click <span className='important'>Log in</span> button!</h3>
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
        onClick={this.handleLogIn}> Log In! </button>
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
      setStatusFailed: () => {
        dispatch(setStatusFailed())
      },
      setStatusNormal: () => {
        dispatch(setStatusNormal())
      },
      setMessage: (message) => {
        dispatch(setMessage(message))
      },
      userAuthSetMyInfo: (body) => {
        dispatch(userAuthSetMyInfo(body))
      }
    }
  })(AuthForm)