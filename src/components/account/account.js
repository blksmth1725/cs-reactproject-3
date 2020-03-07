import React, { Component } from "react";

class Account extends Component {
	renderConent() {
		return <h1>content</h1>;
	}

	render() {
		return <div>{this.renderConent()}</div>;
	}
}

export default Account;
