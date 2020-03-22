import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "../../helpers/icons";

Icons();

function CartButton({ className, icon }) {
	return (
		<div className={`${className} cart-button`}>
			<FontAwesomeIcon icon={icon} />
		</div>
	);
}

function CartContent({ className, products }) {
	let count = products.length;

	return (
		<div className={`${className} card-content`}>
			<div className="cart-content-title">Cart({count})</div>
			<div className="cart-content-products"></div>
			<div className="cart-content-footer"></div>
		</div>
	);
}

class ShopCart extends Component {
	render() {
		const { className } = this.props;
		return (
			<div className={`${className} shop-cart`}>
				<CartButton className="shop-cart-toggle" icon="times" />
				<CartContent className="shop-cart-content" products={[4]} />
			</div>
		);
	}
}

export default ShopCart;
