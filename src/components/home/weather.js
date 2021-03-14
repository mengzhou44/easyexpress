import React, { useState } from 'react'

import { connect } from 'react-redux'
import { toast } from 'react-toastify'

import * as actions from '../../actions'
import CurrentLocation from '../_common/current-location'
import { traceEvent } from '../../shared/analytic'
import {fetchWeather } from '../../services/fetch-weather'

import styles from './weather.module.scss'

function Weather({ localWeather, fetching }) {
	const [enableGeoLocation, setEnableGeoLocation] = useState(false)
	const [temperature, setTemperature] = useState(-1)
	const [summary, setSummary] = useState('')
	const [precipProbability, setPrecipProbability] = useState(-1)
	const [latitude, setLatitude] = useState(0)
	const [longitude, setLongitude] = useState(0)

	function callFetchWeather({ latitude, longitude }) {
		fetchWeather({ latitude, longitude }, res => {
			if (res.success === true) {
				setSummary(res.summary)
				setTemperature(res.temperature)
				setPrecipProbability(res.precipProbability)
			} else {
				toast.error(res.message)
			}
		})
	}

	function renderWeather() {
		if (temperature === -1 || summary === undefined || precipProbability === -1) {
			return <div className={styles.content}>{fetching}</div>
		}

		return (
			<a
				className={styles.content}
				href={`https://darksky.net/forecast/${latitude}, ${longitude}/si12/en`}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div>{summary}</div>
				<div>{temperature.toFixed(0)} &#8451; </div>
				<div>{precipProbability.toFixed(0)}% chance of rain</div>
			</a>
		)
	}

	if (enableGeoLocation === false) {
		return (
			<div
				className={styles.weather}
				onClick={() => {
					traceEvent('weather', 'user current location')
					setEnableGeoLocation(true)
				}}
			>
				<div className={styles['local-weather']}>{localWeather}</div>
			</div>
		)
	}

	return (
		<div className={styles.weather}>
			<CurrentLocation
				onLocated={({ latitude, longitude }) => {
					setLatitude(latitude)
					setLongitude(longitude)

					callFetchWeather({ latitude, longitude }, res => {
						if (res.success === true) {
							const { temperature, summary, precipProbability } = res
							setTemperature(temperature)
							setSummary(summary)
							setPrecipProbability(precipProbability)
						} else {
							setEnableGeoLocation(false)
							toast.error(res.message)
						}
					})
				}}
				onError={error => {
					setEnableGeoLocation(false)
					toast.error(error)
				}}
			/>
			{renderWeather()}
		</div>
	)
}

export default connect(
	null,
	actions
)(Weather)
