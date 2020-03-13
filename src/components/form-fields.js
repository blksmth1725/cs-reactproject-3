import React, { Component } from "react";

export class FormInput extends Component {
	render() {
		const { className, title, type, placeholder, input } = this.props;
		return (
			<div className={`${className} form-input`}>
				<label className="form-input-label">{title}</label>
				<input
					className="form-input-input"
					type={type}
					placeholder={placeholder}
					{...input}
				/>
			</div>
		);
	}
}
export class FormButton extends Component {
	render() {
		const { className, title, type, onClick, input, grey } = this.props;
		return (
			<div className={`${className} form-button`}>
				<button
					className={`form-button-button ${grey ? "form-button-grey" : ""}`}
					type={type}
					{...input}
					onClick={onClick}
				>
					{title}
				</button>
			</div>
		);
	}
}

export class LongGreyButton extends Component {
	render() {
		const { className, lableTitle, title, type, onClick, input } = this.props;
		return (
			<div className={`${className} form-button-long-grey`}>
				<label className="form-button-long-grey-label">{lableTitle}</label>
				<button
					className={`form-button-long-grey-button`}
					type={type}
					{...input}
					onClick={onClick}
				>
					{title}
				</button>
			</div>
		);
	}
}
