import _ from 'lodash'

import { getPublishedInfo } from '../shared/date'
import http from './_http'

function getPostId(link) {
	const temp = link.split('?source=')
	const temp1 = temp[0].split('-')
	return temp1[temp1.length - 1]
}

function setPostAttributes(data) {
	_.map(data, post => {
		const temp = post.title.split(':')
		if (temp.length === 1) {
			post.category = 'Other'
		} else {
			post.category = temp[0].trim()
			post.title = temp[1].trim()
		}
		post.id = getPostId(post.link)
		post.publishedInfo = getPublishedInfo(post.published)
	})
	return data
}

export function fetchBlog(onComplete) {
 
		http
			.get(`/blog`)
			.then(res => {
				let data = setPostAttributes(res.data)
				const sorted = _.sortBy(data, 'published').reverse()
				onComplete({ error: '', data: sorted })
			})
			.catch(error => {
				onComplete({ error: 'Error occurred when fetching blog.' })
			})
 
}

export function fetchPost(postId, onComplete) {
		http
			.post(`/post`, { postId })
			.then(res => {
				onComplete({ error: '', data: res.data })
			})
			.catch(error => {
				onComplete({ error: 'Error occurred when fetching post.' })
			})
}
