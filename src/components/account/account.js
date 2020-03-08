import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions'
import AccountInformation from './account-information'
import PurchaseHistory from './purchase-history'

class Account extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        id: 0,
        title: 'Shop',
        path: '/shop',
      },
      {
        id: 1,
        title: 'Logout',
        path: '/',
      },
    ]

    const navbarLinks = [
      {
        id: 0,
        title: 'Purchase History',
        active: false,
        component: <PurchaseHistory />,
      },
      {
        id: 1,
        title: 'Account Information',
        active: true,
        component: <AccountInformation />,
      },
    ]

    this.props.setHeaderLinks(headerLinks)
    this.props.setNavbarLinks(navbarLinks)
  }

  renderConent() {
    let jsx
    if (this.props.navbarLinks) {
      this.props.navbarLinks.map(link => {
        if (link.active) {
          jsx = link.component
        }
      })
    }
    return jsx
  }

  render() {
    return <div>{this.renderConent()}</div>
  }
}

function mapStateToProps(state) {
  const { headerLinks, navbarLinks } = state.headernavbar
  return { headerLinks, navbarLinks }
}

Account = connect(mapStateToProps, actions)(Account)

export default Account
