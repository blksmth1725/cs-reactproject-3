import React, { Component } from "react";
import Quantity from "../quanity-counter";
import OrangePriceTag from "../orangePriceTag";

class CartProduct extends Component {
	render() {
		const { className, title, quantity, price } = this.props;
		return (
			<div className={`${className} cart-product`}>
				<img
					className="cart-product-image"
					src="http://via.placeholder.com/130x130"
				/>
				<div className="cart-product-title">{title}</div>
				<Quantity className="cart-product-quantity" quantity={quantity} />
				<a className="cart-product-remove">Remove</a>
				<OrangePriceTag className="cart-product-price" title={price} />
			</div>
		);
	}
}

export default CartProduct;
