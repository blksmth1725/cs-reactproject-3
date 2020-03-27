import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { FormInput, FormButton } from '../form-fields'

import history from '../../history'

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props

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

        <div className="shipping-form-line"></div>
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
          onClick={() => history.push('/information/shipping')}
          title="Back"
          type="button"
          name="back"
          grey={true}
          component={FormButton}
        />
      </form>
    )
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm',
})(PaymentForm)

export default PaymentForm
