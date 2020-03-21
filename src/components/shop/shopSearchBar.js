import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "../../helpers/icons";

Icons();

function FormSearchBar(props) {
	return (
		<div className="search-bar-grid">
			<div className="search-bar-grid-icon">
				<FontAwesomeIcon icon="search" />
			</div>
			<input
				className={`${props.className} form-search-bar search-bar-grid-input`}
				{...props.input}
				type="text"
				placeholder={`${props.placeholder}`}
			/>
		</div>
	);
}

class ShopSearchBar extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
				<Field
					name="query"
					className="shop-search-bar_form-search-bar"
					placeholder="Search"
					component={FormSearchBar}
				/>
			</form>
		);
	}
}

ShopSearchBar = reduxForm({
	form: "ShopSearchBar"
})(ShopSearchBar);

export default ShopSearchBar;
