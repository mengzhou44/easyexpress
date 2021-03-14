import React from 'react'

export default function Error({ message }) {
	if (message !== '') {
		return <p className="error">{message}</p>
	}
	return <span />
}
