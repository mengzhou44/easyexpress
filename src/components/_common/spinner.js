import React from 'react'

import styles from './spinner.module.scss'

export default function Spinner({ smallSpinner, text, boxedIn, fixed }) {
	function renderSpinnerImage() {
		let className = styles.image
		if (smallSpinner === true) {
			className = styles['image--small']
		}
		return <img className={className} src="/img/loader.gif" alt="loader" />
	}

	function renderText() {
		if (text !== undefined) {
			return (
				<div className={styles.text}>
					<span> {text}</span>
				</div>
			)
		}
	}

	function getClassName() {
		if (boxedIn !== undefined) {
			return styles.box
		} else if (fixed === true) {
			return styles['spinner--fixed']
		}
		return styles['spinnerd']
	}

	let className = getClassName()
	return (
		<div className={className}>
			<div>
				{renderSpinnerImage()}
				{renderText()}
			</div>
		</div>
	)
}
