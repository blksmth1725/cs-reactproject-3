import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";

class LoginForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		return (
			<form onSubmit={handleSubmit} className={`${className} login-form`}>
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
				<div className="login-form-line"></div>
				<Field
					className="login-form-login"
					onClick={() => console.log("trying to submit")}
					title="Login"
					type="submit"
					name="login"
					component={FormButton}
				/>
			</form>
		);
	}
}

LoginForm = reduxForm({
	form: "LoginForm"
})(LoginForm);

export default LoginForm;
