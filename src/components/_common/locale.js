import React, { useState } from 'react'
import intl from 'react-intl-universal'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import styles from './locale.module.scss'

function Locale({ currentLocale, setLocale }) {
	const [initDone, setInitDone] = useState(true)

	function renderChangeToEnglishLink() {
		return (
			currentLocale === 'zh-CN' && (
				<button
					onClick={() => {
						setInitDone(false)
						setLocale('en-US', () => {
							setInitDone(true)
						})
					}}
				>
					{intl.get('home.buttons.change-to-english')}
				</button>
			)
		)
	}

	function renderChangeToChineseLink() {
		return (
			currentLocale === 'en-US' && (
				<button
					href="#"
					onClick={() => {
						setInitDone(false)
						setLocale('zh-CN', () => {
							setInitDone(true)
						})
					}}
				>
					{intl.get('home.buttons.change-to-chinese')}
				</button>
			)
		)
	}

	return (
		initDone && (
			<div className={styles.locale}>
				{renderChangeToChineseLink()}
				{renderChangeToEnglishLink()}
			</div>
		)
	)
}

function mapStateToProps({ locale }) {
	return {
		currentLocale: locale.current
	}
}

export default connect(
	mapStateToProps,
	actions
)(Locale)
