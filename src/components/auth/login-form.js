import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";
import Details from "../details";

import history from "../../history";

class LoginForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		const links = [
			{
				id: 0,
				title: "Not registered? Create account here",
				onClick: () => history.push("/signup")
			},
			{
				id: 1,
				title: "Forgot account Email?",
				onClick: () => console.log("Forgot Email?")
			},
			{
				id: 2,
				title: "Forgot account Password?",
				onClick: () => console.log("Forgot Password?")
			}
		];
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
				<Details
					className="login-form-details"
					title="Quicklinks"
					links={links}
				/>
			</form>
		);
	}
}

LoginForm = reduxForm({
	form: "LoginForm"
})(LoginForm);

export default LoginForm;
