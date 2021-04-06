import React, { useState } from 'react'
import intl from 'react-intl-universal'
import { Gmaps, Marker, InfoWindow } from 'react-gmaps'
import { connect } from 'react-redux'
import ContactMessageForm from './contact-message-form'

import styles from './contact.module.scss'

import { sendMessage } from '../../services/send-message'

function Contact({ currentLocale }) {
	const [showInfoWindow, setShowInfoWindow] = useState(false)
	const googleApiKey= process.env.REACT_APP_GOOGLE_API_KEY

	function renderInfoWindow() {
		if (showInfoWindow) {
			const temp = intl.get('home.company')
			return (
				<InfoWindow
					lat={35.32397}
					lng={-80.74267}
					onCloseClick={() => setShowInfoWindow(false)}
					content={`<p class="small-font">${temp}</p>`}
				/>
			)
		}
	}

	function renderContent() {
		if (googleApiKey !== '') {
			return (
				<div className={styles['map-box']}>
					<Gmaps
						className={styles.map}
						params={{ key: googleApiKey }}
						lat={35.32397}
						lng={-79.7426}
						zoom={9}
					>
						<Marker
							lat={35.32397}
							lng={-80.74267}
							icon="./img/Mapicon.png"
							onClick={() => {
								setShowInfoWindow(true)
							}}
						/>
						{renderInfoWindow()}
					</Gmaps>
					<ContactMessageForm sendMessage={sendMessage} currentLocale={currentLocale} />
				</div>
			)
		}
	}

	return (
		<section className={styles.contact}>
			<h2>{intl.get('home.contact.title')}</h2>
			<div className={styles.info}>
				<a href="tel:+1-980-242-8337" className={styles.phone}>
					<img src="/img/SVG/mobile.svg" alt="mobile" />
					<p>(980) 242-8337</p>
				</a>

				<a href="mailto:mengzhou44@gmail.com" target="_top" className={styles.email}>
					<img src="/img/SVG/mail.svg" alt="mail" />
					<p>{intl.get('home.contact.send-email')}</p>
				</a>
			</div>
			{renderContent()}
		</section>
	)
}

function mapStateToProps({ locale }) {
	return {
		currentLocale: locale.current
	}
}

export default connect(
	mapStateToProps,
	null,
)(Contact)
