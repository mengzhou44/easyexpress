import http from './_http'

export function fetchGoogle(onComplete) {
	http
		.get(`/google`)
		.then(res => {
			onComplete({ error: '', data: res.data })
		})
		.catch(error => {
			debugger;
			onComplete({ error: `Error occured when fetching data...` })
		})
}
