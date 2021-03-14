import React, { Component } from 'react'
import Modal from 'react-modal'

import styles from './popup.module.scss'

Modal.setAppElement('#root')
export default class Popup extends Component {
	constructor() {
		super()
		this.state = {
			isOpen: false
		}
	}

	open() {
		this.setState({ isOpen: true })
	}

	close() {
		this.setState({
			isOpen: false
		})
	}

	render() {
		return (
			<Modal
				isOpen={this.state.isOpen}
				onRequestClose={() => this.close.bind(this)}
				className={`${styles.modal} animated bounce`}
				overlayClassName={styles.overlay}
			>
				<img
					className={styles.close}
					onClick={() =>
						this.setState({
							isOpen: false
						})
					}
					src="/img/SVG/cross.svg"
					alt="cross"
				/>

				{this.props.children}
			</Modal>
		)
	}
}
