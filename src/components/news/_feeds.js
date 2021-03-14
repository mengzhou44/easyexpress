import React, { useState, useEffect } from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Collapsible from 'react-collapsible'

import $ from 'jquery'

import page from '../_common/page'

import * as actions from '../../actions'

import { traceEvent } from '../../shared/analytic'
import { getTextByLink, convertTextToLink } from '../../shared/format-text'
import { fetchArticles } from '../../services/fetch-articles'
import { toast } from 'react-toastify'
import styles from './_feeds.module.scss'
import FeedsCategories from './_feeds.categories'
import Spinner from '../_common/spinner'
import { useScroll } from '../_hooks/use-scroll'

const parser = require('xmltojson')

function Feeds(props) {
	const [feeds, setFeeds] = useState([])
	const [feedCategories, setFeedCategories] = useState([])
	const [currentCategory, setCurrentCategory] = useState(null)
	const [currentFeed, setCurrentFeed] = useState(null)
	const [showSpinner, setSpinner] = useState(false)
	const [showScrollTop, setShowScrollTop] = useState(false)
	const [fixNavBox, setFixNavBox] = useState(false)

	const scroll = useScroll()

	useEffect(() => {
		if (scroll.y > 40) {
			setShowScrollTop(true)
		} else {
			setShowScrollTop(false)
		}
		if (scroll.y > 80) {
			setFixNavBox(true)
		} else {
			setFixNavBox(false)
		}
	},[scroll.y, setShowScrollTop])

	const renderScrollTop = () => {
		if (showScrollTop === true) {
			return (
				<button
					className={`btn-circle ${styles['scroll-top']}`}
					onClick={() => $('html, body').animate({ scrollTop: 0 }, 1000)}
				>
					<img src="/img/SVG/chevron-up.white.svg" alt="upward" />
				</button>
			)
		}
	}


	useEffect(() => {

		const getCurrentCategory = categories => {
			if (props.category === null) {
				return categories[0]
			}
	
			const categoryName = getTextByLink(props.category)
			const found = _.find(categories, category => category.name === categoryName)
			return found
		}
	
		const getCurrentFeedByCategory = (feeds, currentCategoryName) => {
			if (props.feedLink !== null) {
				const feedName = getTextByLink(props.feedLink)
				return _.find(feeds, item => item.name === feedName)
			}
	
			return _.find(feeds, item => item.source === currentCategoryName)
		}
	
		props.fetchFeeds(({ error, feeds, categories }) => {
			if (error === undefined) {
				setFeeds(feeds)
				setFeedCategories(categories)
				const _currentCategory = getCurrentCategory(categories)

				const _currentFeed = getCurrentFeedByCategory(feeds, _currentCategory.name)

				fetchArticles(_currentFeed.url, articles => {
					_currentFeed.articles = articles

					setCurrentCategory(_currentCategory)
					setCurrentFeed(_currentFeed)
				})
			} else {
				toast.error(error)
			}
		})
	}, [props])

	const renderArticleImage = article => {
		const temp = parser.parseString(article.content)

		if (temp.img) {
			const imageUrl = temp.img[0]._attr['src']._value
			return (
				<div className="col s12 m5">
					<a href={article.link} target="__blank">
						<img src={imageUrl} alt="" width="100%" />
					</a>
				</div>
			)
		}
	}

	const renderFeedName = feed => {
		let className = styles.name
		if (currentFeed === feed) {
			className = styles['name-current']
		}
		return (
			<div className={className} key={feed.url}>
				<button
					onClick={() => {
						traceEvent('feeds', 'select a news feed')
						const currentFeed = _.find(feeds, item => item.name === feed.name)
						setSpinner(true)
						fetchArticles(currentFeed.url, articles => {
							currentFeed.articles = articles
							setCurrentFeed(currentFeed)
							setSpinner(false)

							const categoryLink = convertTextToLink(currentCategory.name)
							const feedLink = convertTextToLink(feed.name)
							props.history.push(`/news/${categoryLink}/${feedLink}`)
						})
					}}
				>
					{feed.name}
				</button>
			</div>
		)
	}

	const renderArticleTitle = article => {
		const temp = parser.parseString(article.content)
		let className = `col s12 ${styles['article-title-box']}`
		if (temp.img) {
			className = `col s12 m7 ${styles['article-title-box']}`
		}
		return (
			<div className={className}>
				<a
					href={article.link}
					target="__blank"
					className={styles['article-title']}
					onClick={() => traceEvent('news', 'read article!')}
				>
					{article.title}
				</a>

				<div className="height-20" />
				<div className={styles['article-published']}>{article.publishedInfo}</div>
			</div>
		)
	}

	const renderArticle = article => {
		return (
			<li className="collection-item" key={article.link}>
				<div className="row">
					{renderArticleImage(article)}
					{renderArticleTitle(article)}
				</div>
			</li>
		)
	}

	const renderArticles = () => {
		if (currentFeed.articles) {
			const filtered = _.uniqBy(currentFeed.articles, 'link')
			const sorted = _.sortBy(filtered, 'published').reverse()

			return <ul className="collection">{sorted.map(renderArticle)}</ul>
		}
	}

	function renderFeedCategories() {
		return (
			<FeedsCategories
				currentCategory={currentCategory}
				feedCategories={feedCategories}
				onSelect={index => {
					traceEvent('feeds', 'select news provider')
					const category = _.find(feedCategories, category => category.index === index)
					const currentFeed = _.find(feeds, item => item.source === category.name)

					setSpinner(true)
					fetchArticles(currentFeed.url, articles => {
						currentFeed.articles = articles
						setSpinner(false)
						setCurrentCategory(category)
						setCurrentFeed(currentFeed)

						const categoryLink = convertTextToLink(category.name)
						props.history.push(`/news/${categoryLink}`)
					})
				}}
			/>
		)
	}

	const renderContent = () => {
		if (showSpinner === true) {
			return <Spinner boxedIn />
		}

		const currentFeeds = _.filter(feeds, feed => feed.source === currentCategory.name)

		let className = styles['nav-box']
		if (fixNavBox === true) {
			className = styles['nav-box-fixed']
		}
		return (
			<div>
				<div className={className}>
					<div className={styles.nav}>{_.map(currentFeeds, renderFeedName)}</div>
				</div>

				<div className={styles['mobile-nav-box']}>
					<div className={styles['mobile-nav']}>
						<Collapsible
							trigger={<div className={styles['mobile-nav-title']}>{currentFeed.name}</div>}
						>
							{_.map(currentFeeds, renderFeedName)}
						</Collapsible>
					</div>
				</div>

				<div className={styles.feed}>
					<div className={styles.articles}>{renderArticles()}</div>
				</div>
			</div>
		)
	}

	if (currentCategory === null || currentFeed === null) {
		return (
			<div className="progress">
				<div className="indeterminate" />
			</div>
		)
	}

	return (
		<div className={styles.container}>
			<div className={styles.categories}>{renderFeedCategories()}</div>
			{renderContent()}
			{renderScrollTop()}
		</div>
	)
}

function mapStateToProps(state, props) {
	return {
		category: props.match.params.category || null,
		feedLink: props.match.params.feedLink || null
	}
}

export default withRouter(connect(mapStateToProps, actions)(page(Feeds)))
