import { combineReducers } from 'redux'

import { reducer as formReducer } from 'redux-form'

import LocaleReducer from './locale-reducer'

import FeedsReducer from './feeds-reducer'

export default combineReducers({
	form: formReducer,
	locale: LocaleReducer,
	feeds: FeedsReducer
})
