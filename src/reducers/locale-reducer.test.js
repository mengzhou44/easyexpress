import localeReducer from './locale-reducer'
import * as types from '../actions/types'

describe('locale reducer', () => {
	it('SET_LOCALE', () => {
		const action = {
			type: types.SET_LOCALE,
			payload: 'ch-ZN'
		}
		const result = localeReducer(
			{
				current: 'en-US'
			},
			action
		)
		expect(result.current).toBe('ch-ZN')
	})
})
