import React from 'react'

import MaskedInput from 'react-text-mask'

export function renderField({
	input,
	placeholder,
	step,
	type,
	disabled,
	meta: { touched, error }
}) {
	let className = 'input-field'

	if (disabled === true) {
		className = 'input-field--disabled'
	}

	return (
		<div className={className}>
			<input
				className="input"
				autoComplete={type === 'password' ? 'current-password' : 'anything'}
				{...input}
				disabled={disabled}
				type={type}
				step={step}
			/>
			<span className="input-label">{placeholder}</span>
			{touched && error && <div className="error">{error}</div>}
		</div>
	)
}

export function renderPhoneField({ input, placeholder, disabled, meta: { touched, error } }) {
	return (
		<div>
			<MaskedInput
				mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
				{...input}
				className="input"
				placeholder={placeholder}
				disabled={disabled}
			/>

			{touched && error && <div className="error">{error}</div>}
		</div>
	)
}

export function renderTextAreaField({
	input,
	placeholder,
	disabled,
	rows,
	meta: { touched, error }
}) {
	return (
		<div>
			<textarea {...input} rows={rows} disabled={disabled} placeholder={placeholder} />
			{touched && error && <div className="error">{error}</div>}
		</div>
	)
}
