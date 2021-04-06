
import http from './_http'

export function sendMessage(props, onComplete) {
		http
			.post(`/message`, props)
			.then(res => {
				onComplete({
					success: true,
					message: 'We received your message. Thank You!'
				})
			})
			.catch(err => {
				onComplete({ success: false, message: 'Network error occcured' })
			})

}
