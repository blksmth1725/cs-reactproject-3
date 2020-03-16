import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

class NavBar extends Component {
	handleOnClick = link => {
		this.props.changeNavbarActive(link.id);
		if (this.props.onClick) {
			this.props.onClick(link.id);
		}
	};
	render() {
		return (
			<div className="navbar">
				{this.props.navbarLinks.map((link, index) => {
					return (
						<a
							className={`navbar-link ${link.active ? "orange-text" : ""}`}
							key={index}
							onClick={() => this.handleOnClick(link)}
						>
							{link.title}
						</a>
					);
				})}
			</div>
		);
	}
}

function mapStateToProps(state) {
	const { navbarLinks, onClick } = state.headernavbar;
	return {
		navbarLinks,
		onClick
	};
}

NavBar = connect(mapStateToProps, actions)(NavBar);

export default NavBar;
