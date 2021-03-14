import React, { useState, useEffect } from 'react'
import { Router, Switch, Route, Redirect } from 'react-router-dom'
import {createBrowserHistory} from 'history'
import { connect } from 'react-redux'
import Loadable from 'react-loadable'


import * as actions from '../actions'
import withTracker from '../shared/with-tracker'

function Loading(props) {
	if (props.error) {
		return (
			<div>
				Error! <button onClick={props.retry}>Retry</button>
			</div>
		)
	} else if (props.timedOut) {
		return (
			<div>
				Taking a long time... <button onClick={props.retry}>Retry</button>
			</div>
		)
	} else if (props.pastDelay) {
		return <div>Loading...</div>
	} else {
		return null
	}
}

const Home = Loadable({
	loader: () => import('./home/_home'),
	loading: Loading
})

const Blog = Loadable({
	loader: () => import('./blog/_blog'),
	loading: Loading
})

const Feeds = Loadable({
	loader: () => import('./news/_feeds'),
	loading: Loading
})

const Videos = Loadable({
	loader: () => import('./videos/_videos'),
	loading: Loading
})

const Resume = Loadable({
	loader: () => import('./resume/_resume'),
	loading: Loading
})

function App({ setLocale }) {
	const [initDone, setInitDone] = useState(true)
	useEffect(() => {
		setLocale('en-US', () => {
			setInitDone(true)
		})
	}, [setLocale])

	return (
		initDone && (
			<Router history={createBrowserHistory()}>
				<div className="height-100-100">
					<Switch>
						<Route exact path="/" component={withTracker(Home)} />
						<Route exact path="/services" component={withTracker(Home)} />
						<Route exact path="/about" component={withTracker(Home)} />
						<Route exact path="/welcome" component={withTracker(Home)} />
						<Route exact path="/blog" component={withTracker(Blog)} />
						<Route exact path="/videos" component={withTracker(Videos)} />
						<Route exact path="/resume" component={withTracker(Resume)} />
						<Route exact path="/news/:category?/:feedLink?" component={withTracker(Feeds)} />
						<Redirect to="/" />
					</Switch>
				</div>
			</Router>
		)
	)
}

export default connect(
	null,
	actions
)(App)
