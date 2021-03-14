import React from 'react'
import { act } from 'react-dom/test-utils'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'

import reducers from '../reducers'

const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

export function initializeComponent(Component, props) {
	return (
		<Provider store={store}>
			<Component {...props} />
		</Provider>
	)
}

export function renderComponentAppendToBody(component) {
	const rootDiv = document.createElement('div')
	act(() => {
		ReactDom.render(component, rootDiv)
		document.body.appendChild(rootDiv)
	})
	return rootDiv
}

export function unmountComponent(div) {
	ReactDom.unmountComponentAtNode(div)
	document.body.removeChild(div)
}
