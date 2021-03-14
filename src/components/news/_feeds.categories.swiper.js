import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../../actions'
import _ from 'lodash'
import Swiper, { Navigation } from 'react-id-swiper'

import styles from './_feeds.categories.swiper.module.scss'

class CategorySwipper extends Component {
	constructor(props) {
		super(props)
		this.state = { swiper: null }
	}

	renderCategory(category) {
		return (
			<div className={styles['swiper-category']} key={category.index}>
				{category.name}
				<img
					onClick={() => this.props.popupRef.current.open()}
					src="/img/SVG/share.svg"
					alt="share"
				/>
			</div>
		)
	}

	goNext() {
		if (this.state.swiper !== null) {
			this.state.swiper.slideNext()
		}
	}

	goPrev() {
		if (this.state.swiper !== null) {
			this.state.swiper.slidePrev()
		}
	}

	render() {
		const params = {
			activeSlideKey: this.props.currentIndex.toString(),
			slidesPerView: 1,
			modules: [Navigation],
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev'
			},
			on: {
				slideChange: () => {
					if (this.state.swiper !== null) {
						this.props.setFeedsCategory(this.state.swiper.realIndex)
						this.props.onSelect(this.state.swiper.realIndex)
					}
				}
			}
		}
		return (
			<div className={styles.swiper}>
				<Swiper {...params} getSwiper={swiper => this.setState({ swiper })}>
					{_.map(this.props.feedCategories, this.renderCategory.bind(this))}
				</Swiper>
			</div>
		)
	}
}

function mapStateToProps({ feeds }) {
	return {
		currentIndex: feeds.categoryIndex
	}
}

export default connect(mapStateToProps, actions)(CategorySwipper)
