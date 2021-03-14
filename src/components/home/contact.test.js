import {
	initializeComponent,
	renderComponentAppendToBody,
	unmountComponent
} from '../../shared/test'
 
import Contact from './contact'

describe('Contact', () => {
	let div, Component
	beforeEach(() => {
		Component = initializeComponent(Contact)
	})

	afterEach(() => {
		unmountComponent(div)
	})

	it('should call fetchGoogle service while initializing...', () => {
		const spy = jest.spyOn(require('../../services/google'), 'fetchGoogle')
		div = renderComponentAppendToBody(Component)
		expect(spy).toHaveBeenCalledTimes(1)
	})

	it.only('click submit button without input, should display validation error', () => {
		div = renderComponentAppendToBody(Component)

		expect(div).toMatchSnapshot()

		const button = document.querySelector('')
		console.log('***************')
		console.log(button)
		// act(() => {
		// 	button.dispatchEvent(new MouseEvent('click', { bubbles: true }))
		// })
		// const errors = document.querySelectorAll('.error')
		// expect(errors.length).tobE(3)
		// expect(errors[0].innerHTML).toBe('Please ennter name')
	})
})
