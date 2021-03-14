import React from 'react'

import styles from './loading.module.scss'

export default function Loading() {
	return <img className={styles.loading} src="/img/loader-white.gif" alt="loader" />
}
