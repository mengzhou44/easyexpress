import React, { useState, useEffect, Suspense, lazy } from 'react'
import $ from 'jquery'

import page from '../_common/page'
import Welcome from './welcome'
import About from './about'
import Loading from '../_common/loading'
import styles from './_home.module.scss'
import { useScroll } from '../_hooks/use-scroll'

const Services = lazy(() => import('./services'))
const Contact = lazy(() => import('./contact'))
const Testimonials = lazy(() => import('./testimonials'))

function Home({ currentLocale }) {
	const [showMore, setShowMore] = useState(false)

	const scroll = useScroll()

	useEffect(() => {
		if (scroll.y > 40) {
			setShowMore(true)
		} else {
			setShowMore(false)
		}
	},[scroll.y])

	function renderMore() {
		if (showMore === true) {
			return (
				<Suspense fallback={<Loading />}>
					<Services currentLocale={currentLocale} />
					<Testimonials currentLocale={currentLocale} />
					<Contact currentLocale={currentLocale} />
				</Suspense>
			)
		}
		return <div id="services" />
	}

	function renderScrollTop() {
		if (showMore === true) {
			return (
				<button
					className={`btn-circle ${styles['scroll-top']}`}
					onClick={() => {
						$('html, body').animate({ scrollTop: 0 }, 1000)
					}}
				>
					<img src="/img/SVG/chevron-up.white.svg" alt="upward" />
				</button>
			)
		}
	}

	return (
		<div>
			<Welcome currentLocale={currentLocale} />
			<About currentLocale={currentLocale} />
			{renderMore()}
			{renderScrollTop()}
		</div>
	)
}

export default page(Home)
