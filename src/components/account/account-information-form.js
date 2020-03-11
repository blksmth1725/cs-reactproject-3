import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
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
					onClick={() => history.push("/account")}
					title="Login"
					type="submit"
					name="login"
					component={FormButton}
				/>
			</form>
		);
	}
}

AccountInformationForm = reduxForm({
	form: "AccountInformationForm"
})(AccountInformationForm);

export default AccountInformationForm;
