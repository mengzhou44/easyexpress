import React, { memo, useState, useEffect } from 'react'
import intl from 'react-intl-universal'
import Gallery from '../_common/gallery'
import styles from './services.module.scss'
import { isMobile } from '../../shared/detect-mobile'

function Services() {
	const [imageRoot, setImageRoot] = useState('/img')

	useEffect(() => {
		if (isMobile() === true) {
			setImageRoot('/img-mobile')
		}
	}, [])

	function renderMindrContent() {
		return (
			<div className={styles.content}>
				<h3>{intl.get('home.services.mindr-title')}</h3>

				<p>{intl.get('home.services.mindr')}</p>
				<Gallery
					mobile
					images={[
						`${imageRoot}/mindr/mindr1.png`,
						`${imageRoot}/mindr/mindr2.png`,
						`${imageRoot}/mindr/mindr3.png`,
						`${imageRoot}/mindr/mindr4.png`,
						`${imageRoot}/mindr/mindr5.png`,
						`${imageRoot}/mindr/mindr6.png`,
						`${imageRoot}/mindr/mindr7.png`
					]}
				/>
			</div>
		)
	}

	function renderClickDishesContent() {
		const temp = intl.get('home.services.clickDishes')

		return (
			<div className={styles.content}>
				<h3>{intl.get('home.services.clickDishes-title')}</h3>

				<p>{temp}</p>
				<Gallery
					images={[
						`${imageRoot}/clickdishes/clickdishes1.jpg`,
						`${imageRoot}/clickdishes/clickdishes2.jpg`,
						`${imageRoot}/clickdishes/clickdishes3.jpg`,
						`${imageRoot}/clickdishes/clickdishes4.jpg`
					]}
				/>
			</div>
		)
	}

	function renderRewardBankContent() {
		return (
			<div className={styles.content}>
				<h3>{intl.get('home.services.rewardBank-title')}</h3>

				<p>{intl.get('home.services.rewardBank')}</p>
				<Gallery
					images={[
						`${imageRoot}/rewardBank/award-imports.jpg`,
						`${imageRoot}/rewardBank/needing-approvals.jpg`,
						`${imageRoot}/rewardBank/report-transactions.jpg`
					]}
				/>
			</div>
		)
	}

	function renderSmartmatContent() {
		return (
			<div className={styles.content}>
				<h3> {intl.get('home.services.smartMat-title')}</h3>
				<p>{intl.get('home.services.smartMat')}</p>
				<div className={styles.smartmat}>
					<div className="composition">
						<img
							src={`${imageRoot}/smartmat/smartmat-1.jpg`}
							alt="photo1"
							className="composition__photo  composition__photo--p1"
						/>
						<img
							src={`${imageRoot}/smartmat/smartmat-2.jpg`}
							alt="photo2"
							className="composition__photo  composition__photo--p2"
						/>
						<img
							src={`${imageRoot}/smartmat/smartmat-3.jpg`}
							alt="photo3"
							className="composition__photo  composition__photo--p3"
						/>
					</div>
				</div>
			</div>
		)
	}

	function renderFunLunchContent() {
		return (
			<div className={styles.content}>
				<h3>{intl.get('home.services.easyFunLunch-title')}</h3>

				<p>{intl.get('home.services.easyFunLunch')}</p>

				<Gallery
					images={[
						`${imageRoot}/funlunch/funlunch-1.jpg`,
						`${imageRoot}/funlunch/funlunch-2.jpg`,
						`${imageRoot}/funlunch/funlunch-3.jpg`,
						`${imageRoot}/funlunch/funlunch-4.jpg`
					]}
				/>
			</div>
		)
	}

	return (
		<section className={styles.services} id="services">
			<h2> {intl.get('home.services.title')} </h2>

			<p>{intl.get('home.services.description')}</p>
			{renderMindrContent()}
			{renderClickDishesContent()}
			{renderRewardBankContent()}
			{renderSmartmatContent()}
			{renderFunLunchContent()}
		</section>
	)
}

export default memo(Services)
