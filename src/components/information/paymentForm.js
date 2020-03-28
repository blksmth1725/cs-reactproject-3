import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { FormInput, FormButton } from '../form-fields'

import history from '../../history'
import OrderSummary from './orderSummary'
import { UnderlinedTitle } from './infoHelp'

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props

    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
          className="payment-form-name"
          title="Name on Credit Card"
          placeholder="Name"
          type="name"
          name="name"
          component={FormInput}
        />
        <Field
          className="payment-form-card"
          title="Credit Card Number"
          placeholder="____-____-____-____"
          type="card"
          name="card"
          component={FormInput}
        />
        <Field
          className="payment-form-expiration"
          title="Expiration Date"
          placeholder="MM/YYYY"
          type="expiration"
          name="expiration"
          component={FormInput}
        />
        <Field
          className="payment-form-ccv"
          title="CCV"
          placeholder="CCV"
          type="ccv"
          name="ccv"
          component={FormInput}
        />
        <div className="payment-form-line"></div>
        <Field
          className="payment-form-proceed-and-checkout"
          onClick={() => history.push('/information/payment')}
          title="Proceed and Complete Order"
          type="submit"
          name="use-this-address"
          component={FormButton}
        />
        <Field
          className="payment-form-back"
          onClick={() => history.push('/information/shipping')}
          title="Back"
          type="Button"
          name="back"
          grey={true}
          component={FormButton}
        />
        <OrderSummary className="payment-form-order-summary" />
        <div className="payment-form-shipping-info shipping-info">
          <UnderlinedTitle
            className="shipping-info-title"
            title="Shipping To"
          />
          <div className="shipping-info-name small-txt">Christian Sheen</div>
          <div className="shipping-info-address small-txt">
            900 North, Purple Bird Ave, Olita, California, 37728
          </div>
        </div>
      </form>
    )
  }
}

PaymentForm = reduxForm({
  form: 'PaymentForm',
})(PaymentForm)

export default PaymentForm
