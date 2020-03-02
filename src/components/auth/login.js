import React, { Component } from "react";

import LoginForm from "./login-form";

class Login extends Component {
	render() {
		return (
			<div className="login">
				<LoginForm className="login_form" />
			</div>
		);
	}
}

export default Login;
