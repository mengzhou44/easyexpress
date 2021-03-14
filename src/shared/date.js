const moment = require('moment')

export const getWeekDay = function() {
	const array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', ' Saturday']
	return array[new Date().getDay()]
}

export const getTime = function() {
	var today = new Date()
	var hours = today.getHours()
	var minutes = today.getMinutes()
	var ampm = hours >= 12 ? 'PM' : 'AM'
	hours = hours % 12
	hours = hours ? hours : 12 // the hour '0' should be '12'
	minutes = minutes < 10 ? '0' + minutes : minutes
	var strTime = hours + ':' + minutes + ' ' + ampm
	return strTime
}

export function addDays(date, days) {
	var result = new Date(date)
	result.setDate(result.getDate() + days)
	return result
}

export function getPublishedInfo(publishedDate) {
	if (publishedDate === '') return ''

	var now = moment(new Date())
	var end = moment(publishedDate)
	var duration = moment.duration(now.diff(end))
	var hours = duration.asHours()

	if (hours >= 24) {
		return end.format('MMM DD, YYYY')
	} else if (hours < 1) {
		return `${Math.round(hours * 60).toString()} minutes ago`
	}
	return `${Math.round(hours).toString()} hours ago `
}
