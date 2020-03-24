import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import ShopSearchBar from './shopSearchBar'
import ShopProduct from './shop-product'
import ShopCart from './shopCart'
import CartButton from './cart-button'
import Icons from '../../helpers/icons'

Icons()

class Shop extends Component {
  constructor() {
    super()

    this.state = {
      showCart: true,
    }
  }

  componentDidMount() {
    // fetch shop products action creator
    const headerLinks = [
      {
        id: 0,
        title: 'Logout',
        path: '/login',
      },
    ]
    this.props.setHeaderLinks(headerLinks)
    this.props.fetchShopCategories()

    // fetch nabar links
    // set navbar links
    this.props.fetchShopProducts()
  }

  componentWillUpdate(nextProps) {
    if (this.props != nextProps) {
      this.props.setNavbarLinks(nextProps.categories, id =>
        this.props.filterProductsWithCategoryId(id),
      )
    }
    return true
  }

  onSubmit = fields => {
    this.props.filterProductsWithQuery(fields)
  }

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
    return (
      <div className="shop">
        <ShopSearchBar onSubmit={this.onSubmit} className="shop_search-bar" />
        {/* shop search-bar */}
        {/* shop products */}

        <div className="shop-products">
          {this.props.filteredProducts.map(product => {
            return <ShopProduct {...product} key={product.id} />
          })}
        </div>
        {this.state.showCart ? <ShopCart className="shop-cart" /> : ''}

        {/* cart button */}
        <CartButton
          onClick={this.handleAddToCart}
          className="shop-cart_button"
          icon="shopping-cart"
        />
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { categories, filteredProducts } = state.shop
  return { categories, filteredProducts }
}

Shop = connect(mapStateToProps, actions)(Shop)

export default Shop
