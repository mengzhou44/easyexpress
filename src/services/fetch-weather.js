import http from './_http'

export function fetchWeather({ latitude, longitude }, callback) {
 
		http
			.post(`/weather`, { latitude, longitude })
			.then(res => {
				callback({ ...res.data, success: true })
			})
			.catch(err => {
				callback({
					success: false,
					error: 'Error occured when fetching weather.'
				})
			})
	 
}
