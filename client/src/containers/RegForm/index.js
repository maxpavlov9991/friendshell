import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import {
  setStatusIsLoading,
  setStatusFailed,
  setStatusNormal,
  setMessage
} from '../../store/registration/actions'

import {
  userAuthSetMyInfo
} from '../../store/user/actions'

class RegForm extends Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
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
          if (event.keyCode === 13 || event.keyCode === 40) {this.emailInput.focus()}
          else {this.loginInput.blur()}
          break
        case this.emailInput:
            if (event.keyCode === 13 || event.keyCode === 40) {this.passwordInput.focus()}
            else {this.loginInput.focus()}
          break
        case this.passwordInput:
            if (event.keyCode === 13) {this.handleSignUp()}
            else if (event.keyCode === 40) {this.passwordInput.blur()}
            else {this.emailInput.focus()}
          break
        default:
          break
      }
    }
  }

  async handleSignUp(event) {
    try {

      this.props.setMessage('')
      this.props.setStatusIsLoading()

      const userInfo = {
        login: this.loginInput.value,
        email: this.emailInput.value,
        password: this.passwordInput.value
      }

      const response = await fetch('http://localhost:9000/auth/register', {
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
        this.props.setStatusFailed()
        this.props.setMessage(res.message)
      } else {
        console.log(res)
        //localStorage.setItem('id_token', user.id_token)
        //localStorage.setItem('access_token', user.access_token)
        this.props.userAuthSetMyInfo(res.body)
        this.props.setStatusNormal()
        this.props.setMessage('Successfuly!')
        //Положить всё в store
        //Загрузить main
      }
    } catch (err) {
      console.log(err)
    }
  }

  //ref attributes
  render() {

    return (
      <div>
        <div
          className='form'>
          <h1>Registration</h1>
          <h3>Please enter your details below and click <span className='important'>Sign up</span> button!</h3>
          <h3>Login:</h3>
          <input
            ref={(loginInput) => { this.loginInput = loginInput }}
            className='login-fld'
            type='login'
            placeholder='anonimus2009'
            onKeyDown={this.handleKeyDown}></input>
          <h3>E-mail:</h3>
          <input
            ref={(emailInput) => { this.emailInput = emailInput }}
            className='email-fld'
            type='email'
            placeholder='kiberfrog@gmail.com'
            onKeyDown={this.handleKeyDown}></input>
          <h3>Password:</h3>
          <input
            ref={(passwordInput) => { this.passwordInput = passwordInput }}
            className='password-fld'
            type='password'
            placeholder='*********'
            onKeyDown={this.handleKeyDown}></input>
          <button
            type=''
            className='enter-btn'
            onClick={this.handleSignUp}>Sign Up!</button>
          <h1>{this.props.status}</h1>
          <h2>{this.props.message}</h2>
          <h3> If you have an account, sign in:</h3>
          <Link
            to='/auth'
            className='login-btn'>I have an account</Link>
        </div>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      status: state.reg.status,
      message: state.reg.message
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
  })(RegForm)