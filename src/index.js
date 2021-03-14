import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import ReactGA from 'react-ga'

import reducers from './reducers'
import App from './components/app'

import { unregister } from './registerServiceWorker'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)

unregister()
