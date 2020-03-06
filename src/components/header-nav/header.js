import React, { Component } from "react";

import { connect } from "react-redux";

class Header extends Component {
	render() {
		return (
			<div className="header">
				<img src="http://via.placeholder.com/50x50" />
				<div className="header-links">
					{this.props.headerLinks.map((link, index) => {
						return (
							<a
								className="header-link"
								key={index}
								onClick={() => console.log("trying to switch tab")}
							>
								{link.title}
							</a>
						);
					})}
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { headerLinks } = state.headernavbar;
	return {
		headerLinks
	};
}

Header = connect(mapStateToProps)(Header);

export default Header;
