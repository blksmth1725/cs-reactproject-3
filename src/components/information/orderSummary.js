import React, { Component } from 'react'

import { UnderlinedTitle, InfoTitle } from './infoHelp'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class OrderSummary extends Component {
  render() {
    const { className } = this.props
    let subtotal = 0
    let tax = 0.16
    this.props.cartProducts.map(cartProduct => {
      subtotal += cartProduct.quantity * cartProduct.product.price
    })

    return (
      <div className={`${className} order-summary`}>
        <UnderlinedTitle
          className="order-summary-title"
          title="Order Summary"
        />
        <InfoTitle
          className="order-summary-subtotal"
          title={`${this.props.cartProducts.length} stickers`}
          value={`$${subtotal.toFixed(2)}`}
        />
        <InfoTitle
          className="order-summary-tax-shipping"
          title="Taxing & Shipping "
          value={`$${tax.toFixed(2)}`}
        />
        <InfoTitle
          className="order-summary-total info-title-orange"
          title="Total"
          value={`$${subtotal + tax}`}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user
  return { cartProducts }
}

OrderSummary = connect(mapStateToProps, actions)(OrderSummary)

export default OrderSummary
