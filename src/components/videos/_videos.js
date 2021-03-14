import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import $ from 'jquery'

import page from '../_common/page'
import styles from './_videos.module.scss'
import SearchBar from './search-bar'
import VideoList from './video-list'
import VideoDetail from './video-detail'
import { useScroll } from '../_hooks/use-scroll'

function Videos() {
	const [videos, setVideos] = useState([])

	const [selectedVideo, setSelectedVideo] = useState(null)
	const [showScrollTop, setShowScrollTop] = useState(false)

	const scroll = useScroll()

	useEffect(() => {
		if (scroll.y > 40) {
			setShowScrollTop(true)
		} else {
			setShowScrollTop(false)
		}
	},[scroll.y, setShowScrollTop])

	function renderScrollTop() {
		if (showScrollTop === true) {
			return (
				<button
					className={`btn-circle ${styles['scroll-top']}`}
					onClick={() => $('html, body').animate({ scrollTop: 0 }, 1000)}
				>
					<img src="/img/SVG/chevron-up.white.svg" alt="upward" />
				</button>
			)
		}
	}

	return (
		<div className={styles.videos}>
			<SearchBar
				onVideosFound={videos => {
					setVideos(videos)
					setSelectedVideo(videos[0])
				}}
			/>
			<div className="row">
				<div className="col s12 m12 l8">
					<VideoDetail video={selectedVideo} />
				</div>
				<div className="col s12 m12 l4">
					<VideoList videos={videos} onVideoSelected={video => setSelectedVideo(video)} />
				</div>
			</div>
			{renderScrollTop()}
		</div>
	)
}

export default withRouter(page(Videos))
