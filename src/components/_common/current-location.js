import React, { useState } from 'react'
import { geolocated } from 'react-geolocated'
import intl from 'react-intl-universal'

function CurrentLocation({
	isGeolocationAvailable,
	isGeolocationEnabled,
	coords,
	onLocated,
	onError
}) {
	const [located, setLocated] = useState(false)

	if (located === false) {
		if (!isGeolocationAvailable) {
			onError(intl.get('general.current-location.error.not-available'))
		} else if (!isGeolocationEnabled) {
			onError(intl.get('general.current-location.error.not-allowed'))
		} else if (coords) {
			onLocated(coords)
			setLocated(true)
		}
	}

	return <div />
}

export default geolocated({
	positionOptions: {
		enableHighAccuracy: false
	},
	userDecisionTimeout: 5000
})(CurrentLocation)
