const getWeatherCurrentUrl = () => {
	return `${process.env.REACT_APP_WEATHER_MAP_BASE_URL}/weather?appid=${
		process.env.REACT_APP_WEATHER_API_KEY
	}`
}

export { getWeatherCurrentUrl }
