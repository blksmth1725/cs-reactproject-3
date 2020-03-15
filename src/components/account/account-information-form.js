import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";
import { FormInput, FormButton, LongGreyButton } from "../form-fields";

import history from "../../history";

class AccountInformationForm extends Component {
	constructor() {
		super();

		this.state = {
			showPasswords: false
		};
	}

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
				<div key={3} className="account-information-form-line"></div>

				{this.state.showPasswords ? (
					[
						<Field
							key={0}
							className="account-information-form-current-password"
							title="Current Password"
							placeholder="Current Password"
							type="password"
							name="current"
							component={FormInput}
						/>,
						<Field
							key={1}
							className="account-information-form-new"
							title="New Password"
							placeholder="New Password"
							type="password"
							name="new"
							component={FormInput}
						/>,
						<Field
							key={2}
							className="account-information-form-confirm"
							title="Confirm Password"
							placeholder="Confirm Password"
							type="password"
							name="confirm"
							component={FormInput}
						/>,

						<Field
							key={4}
							onClick={() => this.setState({ showPasswords: false })}
							className="account-information-form-update-information"
							title="Update Information"
							type="submit"
							name="update-information"
							component={FormButton}
						/>,
						<Field
							key={5}
							className="account-information-form-cancel"
							onClick={() => this.setState({ showPasswords: false })}
							title="Cancel"
							type="button"
							name="cancel"
							grey={true}
							component={FormButton}
						/>
					]
				) : (
					<Field
						className="account-information-form-change-password"
						onClick={() => this.setState({ showPasswords: true })}
						lableTitle="Password"
						title="Change Password"
						type="button"
						name="change-password"
						component={LongGreyButton}
					/>
				)}
			</form>
		);
	}
}

AccountInformationForm = reduxForm({
	form: "AccountInformationForm"
})(AccountInformationForm);

export default AccountInformationForm;
