import React from 'react'
import Swiper, { Navigation } from 'react-id-swiper'

import _ from 'lodash'

import styles from './gallery.module.scss'

export default function Gallery({ whiteButton, mobile, images }) {
	function renderImage(imagePath) {
		return (
			<div key={imagePath} className={styles['image-container']}>
				<img src={imagePath} alt="gallery item" />
			</div>
		)
	}

	let nextEl = '.swiper-button-next'
	let prevEl = '.swiper-button-prev'

	if (whiteButton === true) {
		nextEl = '.swiper-button-next.swiper-button-next-white'
		prevEl = '.swiper-button-prev.swiper-button-prev-white'
	}
	const params = {
		modules: [Navigation],
		navigation: {
			nextEl,
			prevEl
		}
	}

	let className = styles.gallery
	if (mobile === true) {
		className = styles['gallery-mobile']
	}

	return (
		<div className={className}>
			<Swiper {...params}>{_.map(images, renderImage)}</Swiper>
		</div>
	)
}
