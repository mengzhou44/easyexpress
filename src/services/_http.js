import axios from 'axios'
import { setupCache } from 'axios-cache-adapter'

const cache = setupCache({
	maxAge: 5 * 60 * 1000,
	exclude: {
		query: false
	}
})

let baseURL = process.env.REACT_APP_SERVER_URL

const instance = axios.create({
	baseURL,
	adapter: cache.adapter
})

export default instance
