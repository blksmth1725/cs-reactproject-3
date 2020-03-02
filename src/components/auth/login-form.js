import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput } from "../form-fields";

class LoginForm extends Component {
	render() {
		const { className } = this.props;
		return (
			<form className={`${className} login-form`}>
				<Field
					className="login-form-email"
					title="Email"
					placeholder="Email"
					type="email"
					name="email"
					component={FormInput}
				/>
				<Field
					className="login-form-password"
					title="Password"
					placeholder="Password"
					type="password"
					name="password"
					component={FormInput}
				/>
			</form>
		);
	}
}

LoginForm = reduxForm({
	form: "LoginForm"
})(LoginForm);

export default LoginForm;
