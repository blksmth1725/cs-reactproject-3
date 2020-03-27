import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'

import history from '../../history'

import { FormButton } from '../form-fields'
import ReviewProducts from './review-products'

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit, subtotal } = this.props

    let tax = 0.16

    return (
      <form onSubmit={handleSubmit} className={`${className} review-form`}>
        <div className="review-form-legend">
          <div className="review-form-legend-name">Name</div>
          <div className="review-form-legend-quantity">Quantity</div>
          <div className="review-form-legend-price">Price</div>
        </div>
        <ReviewProducts className="review-form-products" />
        <div className="review-form-line"></div>
        <Field
          onClick={() => history.push('/information/shipping')}
          className="review-form-proceed"
          title="Proceed to Checkout"
          type="submit"
          name="Proceed"
          component={FormButton}
        />
        <Field
          className="review-form-back"
          onClick={() => history.push('/shop')}
          title="Back"
          type="button"
          name="back"
          grey={true}
          component={FormButton}
        />
        <div className="review-form-details review-details">
          <div className="review-details-subtotal review-detail">
            <div className="review-detail-title">Subtotal</div>
            <div className="review-detail-price">${subtotal}</div>
          </div>
          <div className="review-details-tax review-detail">
            <div className="review-detail-title">Tax</div>
            <div className="review-detail-price">${tax}</div>
          </div>
          <div className="review-details-shipping review-detail">
            <div className="review-detail-title">Shipping</div>
            <div className="review-detail-price">$10.00</div>
          </div>
          <div className="review-details-Total review-detail review-detail-orange">
            <div className="review-detail-title review-detail-orange-title">
              Total
            </div>
            <div className="review-detail-price review-detail-orange-price">
              ${subtotal + tax}
            </div>
          </div>
        </div>
      </form>
    )
  }
}

ReviewForm = reduxForm({
  form: 'ReviewForm',
})(ReviewForm)

export default ReviewForm
