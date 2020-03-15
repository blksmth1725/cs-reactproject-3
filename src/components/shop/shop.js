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
		// fetch nabar links
		// set navbar links
		// filter products with links
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
	return { state };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
