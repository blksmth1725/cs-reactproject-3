import React, { Component } from "react";

import LoginForm from "./login-form";
import PageTitle from "../page-title";

class Login extends Component {
	onSubmit = fields => {
		console.log({ fields });
	};

	render() {
		return (
			<div className="login">
				<PageTitle className="login-page-title" title="Login" />
				<LoginForm onSubmit={this.onSubmit} className="login_form" />
			</div>
		);
	}
}

export default Login;
