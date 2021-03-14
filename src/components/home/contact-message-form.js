import React, { useState } from 'react'
import intl from 'react-intl-universal'
import { Field, reduxForm } from 'redux-form'
import validator from 'validator'
import ReactGA from 'react-ga'
import { toast } from 'react-toastify'

import { renderField, renderTextAreaField } from '../_common/render-field'

import styles from './contact-message-form.module.scss'
const ContactMessageForm = ({ handleSubmit, reset, sendMessage }) => {
	const [sendingMessage, setSendingMessage] = useState(false)

	function onSubmit(props) {
		ReactGA.event({ category: 'contact-us', action: 'submit' })
		setSendingMessage(true)

		sendMessage(props, ({ success, message }) => {
			setSendingMessage(false)

			if (success === true) {
				const temp = intl.get('home.contact.success')
				toast.success(temp)
				reset()
			} else {
				toast.error(message)
			}
		})
	}
	function renderSendMessageButton() {
		if (sendingMessage === false) {
			return (
				<button type="submit" className="btn">
					{intl.get('home.contact.send-us-message')}
				</button>
			)
		}

		return (
			<button className="btn" disabled>
				Loading
			</button>
		)
	}

	return (
		<div className={styles['form-box']}>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Field
					name="contactName"
					type="text"
					component={renderField}
					placeholder={intl.get('home.contact.placeholders.name')}
				/>
				<div className="height-40" />

				<Field
					name="contactEmail"
					type="email"
					component={renderField}
					placeholder={intl.get('home.contact.placeholders.email')}
				/>
				<div className="height-40" />

				<Field
					name="contactMessage"
					type="text"
					rows="4"
					component={renderTextAreaField}
					placeholder={intl.get('home.contact.placeholders.message')}
				/>

				<div className="height-40" />
				<div className={styles['button-box']}>{renderSendMessageButton()}</div>
			</form>
		</div>
	)
}

const validate = values => {
	const errors = {}
	if (!values.contactName) {
		errors.contactName = intl.get('home.contact.validation.name')
	}
	if (!values.contactEmail) {
		errors.contactEmail = intl.get('home.contact.validation.email')
	}

	if (values.contactEmail && !validator.isEmail(values.contactEmail)) {
		errors.contactEmail = intl.get('home.contact.validation.email-invalid')
	}

	if (!values.contactMessage) {
		errors.contactMessage = intl.get('home.contact.validation.message')
	}

	return errors
}

export default reduxForm({
	form: 'contact-message-form',
	validate
})(ContactMessageForm)
