import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartProduct from "./shopCart-product";

import { connect } from "react-redux";
import * as actions from "../../actions";

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
	let productsJSX = products.map(product => <CartProduct key={product.id} />);

	return (
		<div className={`${className} cart-content`}>
			<div className="cart-content-title">Cart({count})</div>
			<div className="cart-content-products">{productsJSX}</div>
			<CartFooter className="cart-content-footer" products={products} />
		</div>
	);
}

function CartFooter({ className, products }) {
	const price = 7.96;
	return (
		<div className={`${className} cart-footer`}>
			<a className="cart-footer-checkout">Checkout</a>
			<div className="cart-footer-subtotal">Subtotal</div>
			<div className="cart-footer-price">${price}</div>
		</div>
	);
}

class ShopCart extends Component {
	componentDidMount() {
		this.props.fetchCartProducts();
	}
	render() {
		const { className } = this.props;
		return (
			<div className={`${className} shop-cart`}>
				<CartButton className="shop-cart-toggle" icon="times" />
				<CartContent
					className="shop-cart-content"
					products={this.props.cartProducts}
				/>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { cartProducts } = state.user;
	return {
		cartProducts
	};
}

ShopCart = connect(mapStateToProps, actions)(ShopCart);

export default ShopCart;
