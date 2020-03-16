import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions";

class Shop extends Component {
	componentDidMount() {
		// fetch shop products action creator
		const headerLinks = [
			{
				id: 0,
				title: "Login",
				path: "/signin"
			}
		];
		this.props.setHeaderLinks(headerLinks);
		this.props.fetchShopCategories();

		// fetch nabar links
		// set navbar links
		this.props.fetchShopProducts();
	}

	componentWillUpdate(nextProps) {
		if (this.props != nextProps) {
			this.props.setNavbarLinks(nextProps.categories, id =>
				this.props.filterProductsWithCategoryId(id)
			);
		}
		return true;
	}

	render() {
		return (
			<div className="shop">
				{/* seachbar */}
				{/* shop products */}
				{/* cart button */}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { categories } = state.shop;
	return { categories };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
