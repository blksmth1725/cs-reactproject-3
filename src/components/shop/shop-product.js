import React, { Component } from "react";
import Quantity from "../quanity-counter";
import OrangePriceTag from "../orangePriceTag";

class ShopProduct extends Component {
	render() {
		const { title, description, price } = this.props;
		return (
			<div className="shop-product">
				<div className="shop-product-title">{title}</div>
				<div className="shop-product-description">{description}</div>
				<OrangePriceTag className="shop-product-price" title={price} />
				<Quantity className="shop-product-quantity" quantity={1} />
				<div className="shop-product-add-to-cart">Add to cart</div>
			</div>
		);
	}
}

export default ShopProduct;
