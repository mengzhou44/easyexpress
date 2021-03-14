import { getPublishedInfo } from '../shared/date'
import http from './_http'
import _ from 'lodash'

export function fetchArticles(url, onComplete) {
	 
	http
		.get(`/feed?url=${url}`)
		.then(res => {
			const filtered = res.data.filter(article => article.title !== '')
			_.each(filtered, article => {
				article.publishedInfo = getPublishedInfo(article.published)
			})		 
			onComplete(filtered)
		})
		.catch(error => {
			onComplete({ error: `Error occured when fetching articles...` })
		})
}
