import React, { useState, useEffect } from 'react'

import intl from 'react-intl-universal'
import { toast } from 'react-toastify'

import styles from './search-bar.module.scss'
import { decrypt } from '../../shared/crypto'
import { fetchGoogle } from '../../services/google'
import { searchVideos } from '../../services/search-videos'

export default function SearchBar({ onVideosFound }) {
	const [term, setTerm] = useState('Finger Family Collection')
	const [order, setOrder] = useState('viewCount')
	const [apiKey, setApiKey] = useState('')

	useEffect(() => {
		fetchGoogle(async ({ error, data }) => {
			if (error !== '') {
				toast.error(error)
			} else {
				const apiKey = JSON.parse(decrypt(data)).video
				setApiKey(apiKey)
				const videos = await searchVideos({ apiKey, term, order })
				onVideosFound(videos)
			}
		})
	}, [])

	function toggleOrder() {
		if (order === 'viewCount') {
			setOrder('date')
		} else {
			setOrder('viewCount')
		}
	}

	return (
		<form
			className={`${styles.box} js--section-search`}
			onSubmit={async e => {
				e.preventDefault()
				const videos = await searchVideos({ apiKey, term, order })
				onVideosFound(videos)
			}}
		>
			<div className="row">
				<div className="col s12 m12 l8">
					<div className={styles.search}>
						<input
							type="text"
							value={term}
							onChange={e => setTerm(e.target.value)}
							onKeyUp={async e => {
								e.preventDefault()
								if (e.key === 'Enter') {
									const videos = await searchVideos({ apiKey, term, order })
									onVideosFound(videos)
								}
							}}
						/>

						<button className={styles.button} type="submit">
							<img src="/img/SVG/search.svg" alt="search" className={styles.image} />
						</button>
					</div>
				</div>
				<div className="col s12 m12 l4">
					<div className={styles.order}>
						<div className="radio-group">
							<input
								type="radio"
								checked={order === 'viewCount'}
								className="radio-group__radio-input"
								id="views"
								name="order"
								onChange={() => toggleOrder()}
							/>
							<label htmlFor="views" className="radio-group__radio-label">
								<span className="radio-group__radio-button" />

								{intl.get('videos.search-by-views')}
							</label>
						</div>

						<div className="radio-group">
							<input
								type="radio"
								checked={order === 'date'}
								className="radio-group__radio-input"
								id="date"
								name="order"
								onChange={() => toggleOrder()}
							/>
							<label htmlFor="date" className="radio-group__radio-label">
								<span className="radio-group__radio-button" />
								{intl.get('videos.search-by-date')}
							</label>
						</div>
					</div>
				</div>
			</div>
		</form>
	)
}
