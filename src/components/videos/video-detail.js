import React from 'react'
import Spinner from '../_common/spinner'

import styles from './video-detail.module.scss'

function VideoDetail({ video }) {
	if (!video) {
		return (
			<div className={styles.box}>
				<Spinner boxedIn />
			</div>
		)
	}
	const videoId = video.id.videoId
	const url = `https://youtube.com/embed/${videoId}`

	return (
		<div className={styles.box}>
			<div className={styles.content}>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe
						allowFullScreen="allowFullScreen"
						className="embed-responsive-item"
						title={videoId}
						src={url}
					/>
				</div>
				<div className={styles.details}>
					<div className={styles.title}>{video.snippet.title}</div>
					<div className={styles.description}>{video.snippet.description}</div>
				</div>
			</div>
		</div>
	)
}

export default VideoDetail
