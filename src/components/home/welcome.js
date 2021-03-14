import React, { memo } from 'react'
import intl from 'react-intl-universal'
import $ from 'jquery'
import { withRouter } from 'react-router'
import Weather from './weather'

import Locale from '../_common/locale'
import styles from './welcome.module.scss'

function Welcome({ history }) {
	return (
		<section className={styles.welcome} id="welcome">
			<div className={styles.logo}>
				<div>{intl.get('header.logo.line1')}</div>
				<div>{intl.get('header.logo.line2')}</div>
			</div>

			<div className={styles.locale}>
				<Locale />
			</div>

			<div className={styles.left}>
				<h1 className={styles.text}>{intl.get('home.welcome.welcome-text')}</h1>

				<div className={styles.buttons}>
					<button className={`btn-round ${styles.button}`} onClick={() => history.push('/news')}>
						{intl.get('home.welcome.local-news')}
					</button>

					<button
						className={`btn-round ${styles.button}`}
						onClick={() => {
							$('html, body').animate(
								{
									scrollTop: $('#about').offset().top
								},
								1000
							)
							history.push('/about')
						}}
					>
						{intl.get('home.welcome.show-me-more')}
					</button>
				</div>
			</div>

			<div className={styles.right}>
				<Weather
					fetching={intl.get('home.weather.text.fetching')}
					localWeather={intl.get('home.weather.text.local-weather')}
				/>
			</div>
		</section>
	)
}

export default withRouter(memo(Welcome))
