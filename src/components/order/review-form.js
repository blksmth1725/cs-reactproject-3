import React, { Component } from 'react'

import { reduxForm, Field } from 'redux-form'

import history from '../../history'

import { FormButton } from '../form-fields'
import ReviewProducts from './review-products'

class ReviewForm extends Component {
  render() {
    const { className, handleSubmit } = this.props

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
          onClick={() => history.push('/account')}
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
      </form>
    )
  }
}

ReviewForm = reduxForm({
  form: 'ReviewForm',
})(ReviewForm)

export default ReviewForm
