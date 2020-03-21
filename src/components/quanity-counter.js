import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Icons from "../helpers/icons";

Icons();

class Quantity extends Component {
	render() {
		const { className, quantity } = this.props;
		return (
			<div className={`${className} quantity`}>
				<div className="quantity-count">{quantity}</div>
				<div className="quantity-plus">
					<FontAwesomeIcon icon="chevron-up" />
				</div>
				<div className="quantity-minus">
					<FontAwesomeIcon icon="chevron-down" />
				</div>
			</div>
		);
	}
}

export default Quantity;
