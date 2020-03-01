import React, { Component } from 'react'

import Header from './header-nav/header'
import NavBar from './header-nav/nav-bar'

class BaseLayout extends Component {
  render() {
    return (
      <div className="base-layout">
        {this.props.children}
        <Header />
        <NavBar />
      </div>
    )
  }
}

export default BaseLayout
