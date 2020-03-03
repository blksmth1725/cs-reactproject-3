import React, { Component } from "react";

import LoginForm from "./login-form";

class Login extends Component {
	onSubmit = fields => {
		console.log({ fields });
	};

	render() {
		return (
			<div className="login">
				<LoginForm onSubmit={this.onSubmit} className="login_form" />
			</div>
		);
	}
}

export default Login;
