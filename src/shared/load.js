import React from 'react'
import Spinner from '../components/_common/spinner'

export default function loadContent(loading, renderContent) {
	if (loading === true) {
		return <Spinner boxedIn />
	}

	return renderContent()
}
