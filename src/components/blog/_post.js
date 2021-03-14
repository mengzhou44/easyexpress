import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import intl from 'react-intl-universal'

import renderHTML from 'react-render-html'
import { withRouter } from 'react-router'
import page from '../_common/page'

import * as actions from '../../actions'
import loadContent from '../../shared/load'

import styles from './_post.module.scss'

function Post({ match, fetchPost, history }) {
	const [post, setPost] = useState(null)
	const [error, setError] = useState('')

	useEffect(() => {
		const postId = match.params.postId
		fetchPost(postId, ({ error, data }) => {
			setError(error)
			setPost(data)
		})
	}, [fetchPost, match.params.postId])

	function renderContent() {
		if (error !== '') {
			return <span className="error"> {error} </span>
		}

		return (
			<div className={`${styles.post} animated fadeIn`}>
				<div className={styles.header}>
					<div className={styles['header-blog']} onClick={() => history.push('/blog')}>
						{intl.get('post.back-to-previous')}
					</div>
				</div>
				<div className={styles.title}> {post.title} </div>

				<div className={styles.body}>{renderHTML(post.content)}</div>
			</div>
		)
	}

	const loading = post === null
	return <div>{loadContent(loading, renderContent)}</div>
}

export default connect(
	null,
	actions
)(withRouter(page(Post)))
