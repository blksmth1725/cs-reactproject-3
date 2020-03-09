import React, { Component } from 'react'

class PurchaseDetail extends Component {
  render() {
    const { className } = this.props
    return (
      <div className={`${className} purchase-dtails`}>
        Purchase details are displayed here
      </div>
    )
  }
}

export default PurchaseDetail
