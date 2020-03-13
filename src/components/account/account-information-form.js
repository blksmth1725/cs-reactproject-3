import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		return (
			<form
				onSubmit={handleSubmit}
				className={`${className} account-information`}
			>
				<Field
					className="account-information-name"
					title="Name"
					placeholder="Name"
					type="name"
					name="name"
					component={FormInput}
				/>
				<Field
					className="account-information-email"
					title="Email"
					placeholder="Email"
					type="email"
					name="email"
					component={FormInput}
				/>

				<Field
					className="account-information-street-address"
					title="Street Address"
					placeholder="Street Address"
					type="address"
					name="address"
					component={FormInput}
				/>
				<Field
					className="account-information-city"
					title="City"
					placeholder="City"
					type="city"
					name="city"
					component={FormInput}
				/>

				<Field
					className="account-information-state"
					title="State"
					placeholder="State"
					type="state"
					name="state"
					component={FormInput}
				/>
				<Field
					className="account-information-zipcode"
					title="Zip Code"
					placeholder="Zip Code"
					type="zipcode"
					name="zipcode"
					component={FormInput}
				/>

				<div className="account-information-line"></div>
				<Field
					className="account-information-login"
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
