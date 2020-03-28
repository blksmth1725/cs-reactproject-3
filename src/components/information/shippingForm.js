import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'
import { FormInput, FormButton } from '../form-fields'
import OrderSummary from './orderSummary'

import history from '../../history'

class ShippingForm extends Component {
  render() {
    const { className, handleSubmit } = this.props
    return (
      // name
      // street addres
      // city
      // state
      // zip
      <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
        <Field
          className="shipping-form-name"
          title="Name"
          placeholder="Name"
          type="name"
          name="name"
          component={FormInput}
        />
        <Field
          className="shipping-form-street-address"
          title="Street Address"
          placeholder="Street Address"
          type="street-address"
          name="street-address"
          component={FormInput}
        />
        <Field
          className="shipping-form-city"
          title="City"
          placeholder="City"
          type="city"
          name="city"
          component={FormInput}
        />
        <Field
          className="shipping-form-state"
          title="State"
          placeholder="State"
          type="state"
          name="state"
          component={FormInput}
        />
        <Field
          className="shipping-form-zipcode"
          title="Zipcode"
          placeholder="Zipcode"
          type="zipcode"
          name="zipcode"
          component={FormInput}
        />

        <div className="shipping-form-line"></div>
        <Field
          className="shipping-form-use-this-address"
          onClick={() => history.push('/information/payment')}
          title="Use this address"
          type="submit"
          name="use-this-address"
          component={FormButton}
        />
        <Field
          className="shipping-form-back"
          onClick={() => history.push('/order/review')}
          title="Back"
          type="button"
          name="back"
          grey={true}
          component={FormButton}
        />

        <OrderSummary className="shipping-form-order-summary" />
      </form>
    )
  }
}

ShippingForm = reduxForm({
  form: 'ShippingForm',
})(ShippingForm)

export default ShippingForm
