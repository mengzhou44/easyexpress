import * as types from '../actions/types'

const INITIAL_STATE = {
	current: 'en-US'
}
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_LOCALE:
			return { current: action.payload }

		default:
			return state
	}
}
