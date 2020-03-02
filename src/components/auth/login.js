import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

class Login extends Component {
	render() {
		return <div className="login">Login</div>;
	}
}

Login = reduxForm({
	form: "Login"
})(Login);

export default Login;
