import React, { useState, useEffect } from 'react'
import intl from 'react-intl-universal'
import { withRouter } from 'react-router'
import $ from 'jquery'

import { traceEvent } from '../../shared/analytic'
import styles from './header.module.scss'

function Header({ location, history }) {
	const [currentPath, setCurrentPath] = useState('')

	useEffect(() => {
		const { pathname } = location
		setCurrentPath(pathname)

		if (pathname === '/about') {
			$('html, body').animate({ scrollTop: $(`#about`).offset().top }, 1000)
		} else if (pathname === '/services') {
			$('html, body').animate({ scrollTop: $(`#services`).offset().top }, 1000)
		} else if (pathname === '/welcome') {
			$('html, body').animate({ scrollTop: 0 }, 1000)
		}
	}, [location])

	function navigateTo(section) {
		const { pathname } = location
		if (pathname === '/') {
			$('html, body').animate({ scrollTop: $(`#welcome`).offset().top }, 1000)
			history.push(`/${section}`)
		} else {
			history.push(`/${section}`)
		}
	}

	function getClassName(linkPath) {
		if (currentPath.includes(linkPath)) {
			return styles['menu-item--selected']
		}
		return styles['menu-item']
	}

	function renderMenu() {
		return (
			<div className={styles.menu}>
				<div
					className={getClassName('/about')}
					onClick={() => {
						traceEvent('link', 'about')
						navigateTo('about')
					}}
				>
					{intl.get('header.menu.about')}
				</div>

				<div
					className={getClassName('/services')}
					onClick={() => {
						traceEvent('link', 'services')
						navigateTo('services')
					}}
				>
					{intl.get('header.menu.services')}
				</div>

				<div className={getClassName('/news')} onClick={() => history.push('/news')}>
					{intl.get('header.menu.news')}
				</div>

				<div className={getClassName('/videos')} onClick={() => history.push('/videos')}>
					{intl.get('header.menu.videos')}
				</div>
			</div>
		)
	}

	function getHomeIconSource() {
		const { pathname } = location
		if (pathname === '/' || pathname === '/welcome') {
			return '/img/SVG/home-filled.svg'
		}
		return '/img/SVG/home-black.svg'
	}

	function renderHome() {
		return (
			<div className={styles.home}>
				<div
					className={styles.logo}
					onClick={() => {
						traceEvent('link', 'welcome')
						navigateTo('welcome')
					}}
				>
					<div>{intl.get('header.logo.line1')}</div>
					<div>{intl.get('header.logo.line2')}</div>
				</div>
				<img
					src={getHomeIconSource()}
					alt="logo"
					className={styles['home-icon']}
					onClick={() => {
						traceEvent('link', 'welcome')
						navigateTo('welcome')
					}}
				/>
			</div>
		)
	}

	return (
		<header className={styles['header']}>
			{renderHome()}
			{renderMenu()}
		</header>
	)
}

export default withRouter(Header)
