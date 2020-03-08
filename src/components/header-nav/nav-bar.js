import React, { Component } from 'react'

import { connect } from 'react-redux'
import * as actions from '../../actions'

class NavBar extends Component {
  render() {
    return (
      <div className="navbar">
        {this.props.navbarLinks.map((link, index) => {
          return (
            <a
              className={`navbar-link ${link.active ? 'orange-text' : ''}`}
              key={index}
              onClick={() => this.props.changeNavbarActive(link.id)}
            >
              {link.title}
            </a>
          )
        })}
      </div>
    )
  }
}

function mapStateToProps(state) {
  const { navbarLinks } = state.headernavbar
  return {
    navbarLinks,
  }
}

NavBar = connect(mapStateToProps, actions)(NavBar)

export default NavBar
