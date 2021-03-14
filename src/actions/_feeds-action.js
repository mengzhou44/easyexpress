import _ from 'lodash'

import feedsData from '../services/feeds'

import * as types from './types'

export function fetchFeeds(onComplete) {
	return function(dispatch, getState) {
		const state = getState()
		let { feeds, categories } = state.feeds
		if (feeds.length > 0 && categories.length > 0) {
			onComplete({ feeds, categories })
		} else {
			const categories = getFeedsCategories(feedsData)
			dispatch({ type: types.SET_FEEDS, payload: feedsData })
			dispatch({ type: types.SET_FEEDS_CATEGORIES, payload: categories })
			onComplete({ feeds: feedsData, categories })
		}
	}
}

function getFeedsCategories(feeds) {
	const temp = _.uniqBy(_.map(feeds, feed => feed.source))

	let index = 0
	let result = []
	_.map(temp, item => {
		const category = {
			name: item,
			index
		}
		index++
		result.push(category)
	})
	return result
}

export function setFeedsCategory(index) {
	return {type: types.SET_FEEDS_CATEGORY, payload: index}
}
