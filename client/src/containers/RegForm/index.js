import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

import {
  setStatusIsLoading,
  setStatusHasErrored,
  setStatusNormal,
  setMessage
} from '../../store/registration/actions'

class RegForm extends Component {
  constructor(props) {
    super(props)

    this.handleKeyDown = this.handleKeyDown.bind(this)
    this.handleSignUp = this.handleSignUp.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleKeyDown(event) {
    if (event.keyCode === 13) {
      switch (event.target) {
        case this.loginInput:
          this.emailInput.focus()
          break
        case this.emailInput:
          this.passwordInput.focus()
          break
        case this.passwordInput:
          this.handleGoToSignUp()
          break
        default:
          break
      }
    }
  }

  async handleSignUp(event){
    try {

      this.props.setMessage('')
      this.props.setStatusIsLoading()

      const userInfo = {
        login: this.loginInput.value,
        email: this.emailInput.value,
        password: this.passwordInput.value
      }

      const response = await fetch('http://localhost:9000/auth/reg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(userInfo)
      })
      const res = await response.json()
      if (!response.ok) {
        this.props.setMessage('Responce is NOT OK')
        throw new Error('Response is not OK')
      } else {
        console.log(res)
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

  //ref attributes
  render() {

    return (
      <div>
        <div
          className='form'>
          <h1>Registration</h1>
          <h3>Please enter your details below and click <span class='important'>Sign up</span> button!</h3>
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
          <h1>{this.props.message}</h1>
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
  })(RegForm)