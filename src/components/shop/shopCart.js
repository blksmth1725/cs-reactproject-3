import React, { Component } from 'react'
import CartProduct from './shopCart-product'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import Icons from '../../helpers/icons'
import CartButton from './cart-button'
import history from '../../history'

Icons()

function CartContent({ className, products }) {
  let count = products.length
  let productsJSX = products.map(product => (
    <CartProduct {...product} key={product.id} />
  ))

  return (
    <div className={`${className} cart-content`}>
      <div className="cart-content-title">Cart({count})</div>
      <div className="cart-content-products">{productsJSX}</div>
      <CartFooter className="cart-content-footer" products={products} />
    </div>
  )
}

function CartFooter({ className, products }) {
  const price = 7.96
  return (
    <div className={`${className} cart-footer`}>
      <a
        onClick={() => history.push('/order/review')}
        className="cart-footer-checkout"
      >
        Checkout
      </a>
      <div className="cart-footer-subtotal">Subtotal</div>
      <div className="cart-footer-price">${price}</div>
    </div>
  )
}

class ShopCart extends Component {
  // componentDidMount() {
  //   this.props.fetchCartProducts()
  // }

  handleAddToCart = () => {
    if (
      document.getElementById('shop-cart').classList.contains('cart-hidden')
    ) {
      document.getElementById('shop-cart').classList.remove('cart-hidden')
    } else {
      document.getElementById('shop-cart').classList.add('cart-hidden')
    }
  }

  render() {
    const { className } = this.props
    return (
      <div id="shop-cart" className={`${className} shop-cart cart-hidden`}>
        <CartButton
          className="shop-cart-toggle"
          icon="times"
          onClick={this.handleAddToCart}
        />
        <CartContent
          className="shop-cart-content"
          products={this.props.cartProducts}
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { cartProducts } = state.user
  return {
    cartProducts,
  }
}

ShopCart = connect(mapStateToProps, actions)(ShopCart)

export default ShopCart
