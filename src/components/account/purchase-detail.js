import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "redux-form/lib/actions";
function PurchaseDetailLabel({ className, title, value }) {
	return (
		<div className={`${className} purchase-detail-lable`}>
			<div className="purchase-detail-lable-title">{title}</div>
			<div className="purchase-detail-lable-value">{value}</div>
		</div>
	);
}

class PurchaseDetail extends Component {
	render() {
		const {
			className,
			orderNumber,
			orderDate,
			user,
			price,
			creditCard
		} = this.props;
		const { name, shippingAddress } = user;
		return (
			<div className={`${className} purchase-detail`}>
				<PurchaseDetailLabel
					className="purchase-detail-order-number"
					title="Order Number"
					value={orderNumber}
				/>
				<PurchaseDetailLabel
					className="purchase-detail-order-date"
					title="Order Date"
					value={orderDate}
				/>
				<PurchaseDetailLabel
					className="purchase-detail-shipping"
					title="Shipping Address"
					value={`${name}\n${shippingAddress}`}
				/>
				<PurchaseDetailLabel
					className="purchase-detail-price"
					title="Price"
					value={price}
				/>
				<PurchaseDetailLabel
					className="purchase-detail-credit-card"
					title="Credit Card"
					value={creditCard}
				/>
				<a className="purchase-detail-track-shipment">Track Shipment</a>
				<a className="purchase-detail-print-receipt">Print Receipt</a>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { purchaseDetail } = state.user;
	return {
		...purchaseDetail
	};
}

PurchaseDetail = connect(mapStateToProps)(PurchaseDetail);

export default PurchaseDetail;
