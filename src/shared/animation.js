export function updateAnimated(component, callback) {
	component.setState({ animated: false })
	setTimeout(() => {
		component.setState({ animated: true })
		if (callback) {
			callback()
		}
	}, 50)
}
