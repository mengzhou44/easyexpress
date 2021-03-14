import * as types from '../actions/types'

const INITIAL_STATE = {
     feeds: [],
	 categories: [],
	 categoryIndex: -1
}
export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case types.SET_FEEDS:
            return { ...state, feeds: action.payload }
        case types.SET_FEEDS_CATEGORIES:
			return { ...state, categories: action.payload }
		 case types.SET_FEEDS_CATEGORY:
				return { ...state, categoryIndex: action.payload }
	
		default:
			return state
	}
}
