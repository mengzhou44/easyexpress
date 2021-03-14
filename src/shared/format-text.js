const convertTextToLink = text => {
	const temp = text.trim()
	return temp.split(' ').join('-')
}

const getTextByLink = link => {
	return link.replace(/-/g,  ' ')
}

module.exports = {
	convertTextToLink,
	getTextByLink
}
