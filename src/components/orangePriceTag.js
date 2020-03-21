import React, { Component } from "react";

class OrangePriceTag extends Component {
	render() {
		const { className, title } = this.props;
		return <div className={`${className} orange-price-tag`}>${title}</div>;
	}
}

export default OrangePriceTag;
