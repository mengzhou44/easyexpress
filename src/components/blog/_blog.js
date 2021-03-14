import React, { useState, useEffect } from 'react'
import _ from 'lodash'

import page from '../_common/page'

import { updateAnimated } from '../../shared/animation'
import loadContent from '../../shared/load'
import styles from './_blog.module.scss'
import { fetchBlog } from '../../services/blog'

function Blog({props}) {
	const [current, setCurrent] = useState('')
	const [categories, setCategories] = useState([])
	const [posts, setPosts] = useState([])
	const [error, setError] = useState('')
	const [showSpinner, setShowSpinner] = useState(true)

	useEffect(() => {
		fetchBlog(({ error, data }) => {
			if (error === '') {
				let categories = _.map(data, post => post.category)
				categories = _.uniqBy(categories)
				setCategories(categories)
				setCurrent(categories[0])
				setPosts(data)
				setShowSpinner(false)
			} else {
				setError(error)
			}
		})
	}, [])

	function selectPosts() {
		return _.filter(posts, post => post.category === current)
	}

	function renderCategory(category) {
		let className = styles['category-item']
		if (current === category) {
			className = styles['category-item-current']
		}
		return (
			<div className={className} key={category}>
				<div
					onClick={() => {
						setCurrent(category)
						setShowSpinner(true)
						updateAnimated(this, () => {
							setShowSpinner(true)
						})
					}}
				>
					{category}
				</div>
			</div>
		)
	}

	function renderPost(post) {
		return (
			<div className={`collection-item ${styles.post}`} key={post.link}>
				<span
					onClick={() => {
						props.history.push({ pathname: `/post/${post.id}` })
					}}
				>
					{post.title}
				</span>

				<div className="height-10" />
				<div className={styles['post-published']}> {post.publishedInfo} </div>
				<div className="height-10" />
			</div>
		)
	}

	function renderPosts() {
		if (error !== '') {
			return <div className="error"> {error} </div>
		}

		return <div className="collection">{_.map(selectPosts(), renderPost)}</div>
	}

	function renderContent() {
		if (error !== '') {
			return <p className="error"> {error} </p>
		}

		return (
			<div className={`${styles.blog} animated fadeIn`}>
				<div className={styles['nav-box']}>
					<div className={styles['nav']}>{_.map(categories, renderCategory)}</div>
				</div>
				<div className={styles['content']}>{renderPosts()}</div>
			</div>
		)
	}

	return <div>{loadContent(showSpinner, renderContent)}</div>
}

export default page(Blog)
