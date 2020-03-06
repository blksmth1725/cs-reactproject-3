import React, { Component } from "react";

import SignupForm from "./signup-form";
import PageTitle from "../page-title";

class Signup extends Component {
	onSubmit = fields => {
		console.log({ fields });
	};

	render() {
		return (
			<div className="signup">
				<PageTitle className="signup-page-title" title="Register" />
				<SignupForm onSubmit={this.onSubmit} className="signup_form" />
			</div>
		);
	}
}

export default Signup;
