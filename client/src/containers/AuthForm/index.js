import React, { Component } from 'react'
import { connect } from 'react-redux'
import './style.css'

import { setLoginText, setPasswordText } from '../../store/authorization/actions'

class AuthForm extends Component {
  constructor(props) {
    super(props)

    this.handleLoginChange = this.handleLoginChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
    this.handleLoginKeyDown = this.handleLoginKeyDown.bind(this)
    this.handlePasswordKeyDown = this.handlePasswordKeyDown.bind(this)
    this.handleEnter = this.handleEnter.bind(this)
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  handleLoginChange(event) {
    this.props.setLoginText(event.target.value)
  }

  handlePasswordChange(event) {
    this.props.setPasswordText(event.target.value)
  }

  handleLoginKeyDown(event){
    if (event.keyCode === 13) {
      document.getElementById('password').focus()
    }
  }

  handlePasswordKeyDown(event){
    if (event.keyCode === 13) {
      this.handleEnter()
    }
  }

  handleEnter(event){
    
  }

  //ref attributes
  render() {
    return (
      <div>
        <div id='form' className='login-form'>
          <input id='login' onKeyDown={this.handleLoginKeyDown} onChange={this.handleLoginChange} className='login-fld' type='login' placeholder='Login or e-mail' value={this.props.login}></input>
          <input id='password' onKeyDown={this.handlePasswordKeyDown} onChange={this.handlePasswordChange} className='password-fld' type='password' placeholder='Password' value={this.props.password}></input>
          <button type='' className='enter-btn'> Log in </button>
        </div>
        <h3> If you haven't an account, please, register:</h3>
        <button className='register-btn' onClick={this.handleEnter}> Sing up </button>
      </div>
    )
  }
}

export default connect(
  (state) => {
    return {
      login: state.auth.login,
      email: state.auth.email,
      password: state.auth.password
    }
  },
  (dispatch) => {
    return {
      setLoginText: (login) => {
        dispatch(setLoginText(login))
      },
      setPasswordText: (password) => {
        dispatch(setPasswordText(password))
      }
    }
  })(AuthForm)