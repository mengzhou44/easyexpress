import _ from 'lodash'

export function getShortName(name) {
	var temp = name.split(' ')
	return temp[0].trim() + ' ' + temp[1].substring(0, 1).toUpperCase() + '.'
}

export function capitalizeWords(text) {
	var words = text.split(' ')

	var temp = _.map(words, word => {
		return _.capitalize(word.trim())
	})

	return temp.join(' ')
}
