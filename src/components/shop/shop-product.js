import React, { Component } from "react";
import Quantity from "../quanity-counter";
import OrangePriceTag from "../orangePriceTag";

class ShopProduct extends Component {
	render() {
		const { title, description, price } = this.props;
		return (
			<div className="shop-product">
				<div className="shop-product-front">
					<img
						className="shop-product-front-image"
						src="http://via.placeholder.com/220x220"
					/>
					<div className="shop-product-front-title">{title}</div>
				</div>
				<div className="shop-product-back">
					<div className="shop-product-back-title">{title}</div>
					<div className="shop-product-back-description">{description}</div>
					<OrangePriceTag className="shop-product-back-price" title={price} />
					<Quantity className="shop-product-back-quantity" quantity={1} />
					<div className="shop-product-back-add-to-cart">Add to cart</div>
				</div>
			</div>
		);
	}
}

export default ShopProduct;
