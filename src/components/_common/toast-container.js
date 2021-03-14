import React from 'react'

import { ToastContainer, cssTransition } from 'react-toastify'

export default function MyToastContainer() {
	const zoom = cssTransition({
		enter: 'zoomIn',
		exit: 'zoomOut',
		duration: 750
	})

	return <ToastContainer transition={zoom} position="bottom-left" hideProgressBar />
}
