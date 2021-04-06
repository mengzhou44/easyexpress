import React, { memo } from 'react'
import intl from 'react-intl-universal'

import styles from './about.module.scss'

export function About() {
	return (
		<section className={styles.about} id="about">
			<h2 className={styles.company}>
				{intl.get('home.about.company')}
				<a
					className={styles.images}
					href="https://www.linkedin.com/in/mengzhou44"
					target="__blank"
				>
					<img className={styles.photo} src="/img/my-photo.jpeg" alt="myphoto" />
					<img className={styles.linkedIn} src="/img/SVG/linkedin.svg" alt="linked-in" />
				</a>
				<a className={styles.github} href="https://github.com/mengzhou44" target="__blank">
					<img src="/img/SVG/github.svg" alt="github" />
				</a>
			</h2>
			<p>{intl.get('home.about.content')}</p>

			<div className={`row slim ${styles.clients}`}>
				<div className="col s12 m6">
					<ul>
						<li>Wells Fargo</li>
						<li>Clickdishes</li>
						<li>Wiles Jackson Inc</li>
						<li>Golden Environmental Mat Services</li>
						<li> The City of Calgary</li>
						<li> Dynamysk Automation</li>
						<li> C4i Consultants</li>
						<li> Enmax </li>
					</ul>
				</div>
				<div className="col s12 m6">
					<ul>
						<li> Olympia Financial Group</li>
						<li> Computer Aid Professional Services </li>
						<li> Shaw Communications</li>
						<li> Concord Well Servicing</li>
						<li> Pioneer Petrotech Services</li>
						<li> Calsim Technology</li>
						<li> GE Energy</li>
						<li> The Orthoshop</li>
					</ul>
				</div>
			</div>
		</section>
	)
}

export default memo(About)
