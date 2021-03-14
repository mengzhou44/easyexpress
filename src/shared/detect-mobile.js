import { detect } from 'detect-browser'

const isMobile = () => {
	const browser = detect()
	return browser.os === 'iOS' || browser.os === 'Android OS'
}

export { isMobile }
