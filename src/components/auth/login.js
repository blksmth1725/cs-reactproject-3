import React, { Component } from 'react'

import LoginForm from './login-form'
import PageTitle from '../page-title'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class Login extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

  onSubmit = fields => {
    console.log({ fields })
  }

  render() {
    return (
      <div className="login">
        <PageTitle className="login-page-title" title="Login" />
        <LoginForm onSubmit={this.onSubmit} className="login_form" />
      </div>
    )
  }
}

Login = connect(null, actions)(Login)
export default Login
