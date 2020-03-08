import React, { Component } from 'react'

import SignupForm from './signup-form'
import PageTitle from '../page-title'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class Signup extends Component {
  componentDidMount() {
    this.props.setHeaderLinks([])
    this.props.setNavbarLinks([])
  }

  onSubmit = fields => {
    console.log({ fields })
  }

  render() {
    return (
      <div className="signup">
        <PageTitle className="signup-page-title" title="Register" />
        <SignupForm onSubmit={this.onSubmit} className="signup_form" />
      </div>
    )
  }
}

Signup = connect(null, actions)(Signup)
export default Signup
