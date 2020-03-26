import React, { Component } from 'react'
import OrangePriceTag from '../orangePriceTag'

class ReviewProduct extends Component {
  render() {
    const { product, quantity } = this.props
    const { title, price, imageUrl } = product
    return (
      <div className="review-product">
        <img className="review-product-image" src={imageUrl} />
        <div className="review-product-title">{title}</div>
        <div className="review-product-quantity">{quantity}</div>
        <OrangePriceTag
          className="review-product-price"
          title={price * quantity}
        />
      </div>
    )
  }
}

export default ReviewProduct
