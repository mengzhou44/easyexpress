import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import intl from 'react-intl-universal'
import Header from './header'
import ToastContainer from './toast-container'
import styles from './page.module.scss'

export default function(ComposedComponent) {
	function PageWrapper(props) {
		useEffect(() => {
			window.scrollTo(0, 0)
		})

		const year = new Date().getFullYear()

		return (
			<div className={styles.page}>
				<div className={styles['content-box']}>
					<Header />
					<div className={styles.content}> {<ComposedComponent {...props} />} </div>
					<ToastContainer />
				</div>
				<div className={styles.footer}>
					{intl.get('home.copyright')} &copy; {year} &nbsp; {intl.get('home.company')} &nbsp; &nbsp;
					{intl.get('home.all-rights-reserved')}
				</div>
			</div>
		)
	}

	function mapStateToProps(state) {
		return {
			currentLocale: state.locale.current
		}
	}

	return connect(mapStateToProps)(PageWrapper)
}
