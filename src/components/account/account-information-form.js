import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton, LongGreyButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
	render() {
		const { className, handleSubmit } = this.props;
		return (
			<form
				onSubmit={handleSubmit}
				className={`${className} account-information-form`}
			>
				<Field
					className="account-information-form-name"
					title="Name"
					placeholder="Name"
					type="name"
					name="name"
					component={FormInput}
				/>
				<Field
					className="account-information-form-email"
					title="Email"
					placeholder="Email"
					type="email"
					name="email"
					component={FormInput}
				/>
				<Field
					className="account-information-form-street-address"
					title="Street Address"
					placeholder="Street Address"
					type="address"
					name="address"
					component={FormInput}
				/>
				<Field
					className="account-information-form-city"
					title="City"
					placeholder="City"
					type="city"
					name="city"
					component={FormInput}
				/>

				<Field
					className="account-information-form-state"
					title="State"
					placeholder="State"
					type="state"
					name="state"
					component={FormInput}
				/>
				<Field
					className="account-information-form-zipcode"
					title="Zip Code"
					placeholder="Zip Code"
					type="zipcode"
					name="zipcode"
					component={FormInput}
				/>

				<Field
					className="account-information-form-change-password"
					onClick={() => console.log("trying to show password")}
					lableTitle="Password"
					title="Change Password"
					type="button"
					name="change-password"
					component={LongGreyButton}
				/>
				<div className="account-information-form-line"></div>
			</form>
		);
	}
}

AccountInformationForm = reduxForm({
	form: "AccountInformationForm"
})(AccountInformationForm);

export default AccountInformationForm;
