import React from 'react'
import _ from 'lodash'
import $ from 'jquery'

import { getPublishedInfo } from '../../shared/date'
import { getStatisticsCount } from '../../shared/number'

import styles from './video-list.module.scss'

export default function VideoList({ videos, onVideoSelected }) {
	function navigateTo(section) {
		$('html, body').animate({ scrollTop: $(section).offset().top }, 1000)
	}

	function renderVideo(video) {
		return (
			<li key={video.etag}>
				<div
					className={styles.item}
					onClick={() => {
						navigateTo('.js--section-search')
						onVideoSelected(video)
					}}
				>
					<div>
						<img className={styles.image} src={video.snippet.thumbnails.default.url} alt="video" />
					</div>
					<div>
						<div className={styles.title}>{video.snippet.title} </div>
						<div className={styles.info}>
							<div className={styles.date}>{getPublishedInfo(video.snippet.publishedAt)} </div>
							<div className={styles.views}>{getStatisticsCount(video.viewCount)} views </div>
						</div>
					</div>
				</div>
			</li>
		)
	}

	return <ul className={styles.list}>{_.map(videos, renderVideo)}</ul>
}
