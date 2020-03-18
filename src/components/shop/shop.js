import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import ShopSearchBar from './shopSearchBar'

class Shop extends Component {
  componentDidMount() {
    // fetch shop products action creator
    const headerLinks = [
      {
        id: 0,
        title: 'Login',
        path: '/signin',
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

  render() {
    return (
      <div className="shop">
        <ShopSearchBar onSubmit={this.onSubmit} className="shop_search-bar" />
        {/* shop search-bar */}
        {/* shop products */}
        <div className="shop-products">
          {this.props.filteredProducts.map(product => {
            return (
              <div key={product.id} className="shop-product">
                <div className="shop-product-title">{product.title}</div>
                <div className="shop-product-description">
                  {product.description}
                </div>
              </div>
            )
          })}
        </div>

        {/* cart button */}
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
