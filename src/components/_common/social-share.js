import React from 'react'

import {
	FacebookShareButton,
	TwitterShareButton,
	EmailShareButton,
	FacebookIcon,
	TwitterIcon,
	EmailIcon
} from 'react-share'

import styles from './social-share.module.scss'

export default function SocialShare({ message, shareUrl, emailSubject, emailBody }) {
	return (
		<div className={styles.share}>
			<div className={styles['share-item']}>
				<FacebookShareButton url={shareUrl} quote={message}>
					<FacebookIcon size={48} round />
				</FacebookShareButton>
			</div>

			<div className={styles['share-item']}>
				<TwitterShareButton url={shareUrl} title={message}>
					<TwitterIcon size={48} round />
				</TwitterShareButton>
			</div>
			<div className={styles['share-item']}>
				<EmailShareButton url={shareUrl} subject={emailSubject} body={emailBody}>
					<EmailIcon size={48} round />
				</EmailShareButton>
			</div>
		</div>
	)
}
