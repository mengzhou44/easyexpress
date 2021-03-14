import ReactGA from 'react-ga'
const traceEvent = (category, action) => {
	ReactGA.event({
		category,
		action
	})
}

export { traceEvent }
