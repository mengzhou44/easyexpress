import React, { useEffect } from 'react'
import _ from 'lodash'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import CategorySwiper from './_feeds.categories.swiper'
import intl from 'react-intl-universal'
import { connect } from 'react-redux'
import * as actions from '../../actions'

import Popup from '../_common/popup'
import SocialShare from '../_common/social-share'
import { convertTextToLink } from '../../shared/format-text'

import styles from './_feeds.categories.module.scss'
import {useDevice} from '../_hooks/use-device'

function FeedsCategories({
	feedCategories,
	onSelect,
	currentCategory,
	setFeedsCategory,
	currentIndex
}) {
	const popupRef = React.createRef()
	const device = useDevice();

	useEffect(()=> {
		setFeedsCategory(currentCategory.index)
	}, [currentCategory,setFeedsCategory])
	 
	function CategoryTabs() {
		function renderCategory(category) {
			return <Tab key={category.index}>{category.name}</Tab>
		}

		return (
			<div className={styles.tabs}>
				<Tabs
					selectedIndex={currentIndex}
					onSelect={index => {
						setFeedsCategory(index)
						onSelect(index)
					}}
				>
					<TabList>{_.map(feedCategories, renderCategory)}</TabList>
					{_.map(feedCategories, category => (
						<TabPanel key={category.index} />
					))}
				</Tabs>
				<img src="/img/SVG/share.svg" alt="share" onClick={() => popupRef.current.open()} />
			</div>
		)
	}

	function ShareNewsLink() {
		const message = intl.get('general.local-news')
		const shareUrl = getNewsLink()

		function getNewsLink() {
			const { protocol, hostname } = window.location

			const category = feedCategories[currentIndex]
			if (category === undefined) {
				return `${protocol}://${hostname}/news`
			}

			const name = convertTextToLink(category.name)
			return `${protocol}://${hostname}/news/${name}`
		}

		return (
			<Popup ref={popupRef}>
				<SocialShare
					mesage={message}
					shareUrl={shareUrl}
					emailSubject={message}
					emaiBody={shareUrl}
				/>
			</Popup>
		)
	}
	if (device === "desktop") {
		return (
			<div>
				<CategoryTabs />
				<ShareNewsLink />
			</div>
		)
	}

	return (
		<div>
		    <CategorySwiper
				feedCategories={feedCategories}
				onSelect={onSelect}
				popupRef={popupRef}
			/> 
			<ShareNewsLink />
		</div>
	)
}

function mapStateToProps({ feeds }) {
	return {
		currentIndex: feeds.categoryIndex
	}
}

export default connect(mapStateToProps, actions)(FeedsCategories)


