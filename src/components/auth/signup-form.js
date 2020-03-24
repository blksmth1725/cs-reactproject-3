import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { FormInput, FormButton } from '../form-fields'
import Details from '../details'

import history from '../../history'

class SignupForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    const guidelines = [
      {
        id: 0,
        title: 'At least six chracters',
      },
      {
        id: 1,
        title: 'At least one number',
      },
      {
        id: 2,
        title: 'At least one symbol',
      },
    ]
    return (
      <form onSubmit={handleSubmit} className={`${className} signup-form`}>
        <Field
          className="signup-form-name"
          title="Name"
          placeholder="Name"
          type="name"
          name="name"
          component={FormInput}
        />
        <Field
          className="signup-form-email"
          title="Email"
          placeholder="Email"
          type="email"
          name="email"
          component={FormInput}
        />
        <Field
          className="signup-form-password"
          title="Password"
          placeholder="Password"
          type="password"
          name="password"
          component={FormInput}
        />
        <Field
          className="signup-form-confirm"
          title="Confirm Password"
          placeholder="Confirm Password"
          type="password"
          name="confirm"
          component={FormInput}
        />

        <div className="signup-form-line"></div>
        <Field
          onClick={() => history.push('/shop')}
          className="signup-form-signup"
          title="Create Account"
          type="submit"
          name="Signup"
          component={FormButton}
        />
        <Field
          className="signup-form-back"
          onClick={() => history.push('/account')}
          title="Back"
          type="button"
          name="back"
          grey={true}
          component={FormButton}
        />
        <Details
          className="signup-form-details"
          title="Password Requirements"
          guidelines={guidelines}
        />
      </form>
    )
  }
}

SignupForm = reduxForm({
  form: 'SignupForm',
})(SignupForm)

export default SignupForm
