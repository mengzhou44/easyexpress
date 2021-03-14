import { fetchFeeds } from './_feeds-action'

describe('feeds actions', () => {
	it('fetch feeds success', () => {
		const spy = jest.spyOn(require('axios'), 'get')
		const response = {
			error: '',
			data: []
		}
		spy.mockImplementation(() => response)
		fetchFeeds(res => {
			expect(res).toBe(response)
		})
	})

	it('fetch feeds failure', () => {
		const spy = jest.spyOn(require('axios'), 'get')

		spy.mockImplementation(() => {
			throw 'error'
		})
		fetchFeeds(res => {
			expect(res).toBe({ error: 'Error occured when fetching feeds...' })
		})
	})
})
