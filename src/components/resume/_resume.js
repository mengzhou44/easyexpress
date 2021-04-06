import React, { memo } from 'react'

import { withRouter } from 'react-router-dom'

import page from '../_common/page'
import styles from './_resume.module.scss'

function Resume() {
	function renderHeader() {
		return (
			<div className={styles['header']}>
				<div className={styles['header-name']}>Meng Zhou</div>
				<img className={styles['header-image']} src="/img/my-photo.jpeg" alt="my" />
				<div className={styles['header-line']}>8622 Ashley Hill CT, Apt L, Charlotte</div>
				<div className={styles['header-line']}>(980) 242-8337 mengzhou44@gmail.com</div>
			</div>
		)
	}

	function renderHighlights() {
		return (
			<div className={styles.box}>
				<div className={styles['title']}>Highlights</div>
				<ul className={styles['content']}>
					<li className={styles['item']}>
						Passionate on solving business problems with technology.
					</li>
					<li className={styles['item']}>Entrepreneur, Self-Motivated and Creative.</li>
					<li className={styles['item']}>Professional, Organized, and Effective communicator.</li>
					<li className={styles['item']}>
						Proficient in full-stack web from database to back end to front-end HTML.
					</li>
					<li className={styles['item']}>
						Full cycle experience in analyze, design, develop and deploy software products.
					</li>
					<li className={styles['item']}>
						Team oriented, result driven, quality minded, customer focused.
					</li>
				</ul>
			</div>
		)
	}

	function renderTechnicalSkills() {
		return (
			<div className={styles.box}>
				<div className={styles['title']}>Technical Skills</div>
				<ul className={styles['content']}>
					<li className={styles['item']}>Node, React, HTML5/CSS3, SCSS, React Native</li>
					<li className={styles['item']}>
						AWS, Docker, Code Pipeline, S3, EC2, ECS, ELB, RDS, Route 53.
					</li>
					<li className={styles['item']}>VS Code, Chrome, GitHub, Travis CI</li>
					<li className={styles['item']}>
						Postgres, Oracle, SQL Server, MongoDB, Active Reports, Reporting Services
					</li>
					<li className={styles['item']}>
						GIT, Team City, Octopus, TFS, Subversion, Visual Source Safe, Win CVS
					</li>
					<li className={styles['item']}>
						GoF patterns, S.O.L.I.D principles, UML, TDD, DDD, DI, MEF, MVP
					</li>
				</ul>
			</div>
		)
	}

	function renderCourses() {
		return (
			<div className={styles.box}>
				<div className={styles['title']}>TRAINING</div>
				<ul className={styles['content']}>
					<li className={styles['item']}>Machine Learning with Javascript, Udemy, 2019</li>
					<li className={styles['item']}>AWS Certified Developer Associate 2019, Udemy, 2019</li>
					<li className={styles['item']}>Node JS advanced concepts, Udemy 2019</li>
					<li className={styles['item']}>
						Advanced CSS and Sass: Flexbox, Grid, Animations, Udemy, 2018
					</li>
					<li className={styles['item']}>The Complete Node Developer Course, Udemy, 2017</li>
					<li className={styles['item']}>
						The Complete React Native and Redux Course, Udemy, 2017
					</li>
					<li className={styles['item']}>Advanced React and Redux, Udemy, 2017.</li>
					<li className={styles['item']}>
						JavaScript: Understanding the Weird Parts, Udemy, 2017.
					</li>
					<li className={styles['item']}>
						Electron for Desktop Apps: The Complete Developer's Guide, Udemy, 2017
					</li>
					<li className={styles['item']}>
						Financial Accounting, Marketing Essentials, Business Law, SAIT, 2003-2004.
					</li>
					<li className={styles['item']}>
						Sun Certified Java Programmer for Java 2 Platform, 2004.
					</li>
				</ul>
			</div>
		)
	}

	function renderEducation() {
		return (
			<div className={styles.box}>
				<div className={styles['title']}>Education</div>
				<ul className={styles['content']}>
					<li className={styles['item']}>
						M. A. Sc, Electronic System Engineering, University of Regina, Sask., 2002.
					</li>
					<li className={styles['item']}>
						B. Eng, Wireless Engineering, Beijing University of Telecom, Beijing, China, 1995.
					</li>
				</ul>
			</div>
		)
	}

	function renderClickDishes() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Full Stack Developer</span> (2018.9 - Present) ClickDishes Inc, Calgary, AB
				</div>
				<p>
					Sole developer, designed, built order.clickdishes.com, a food order web site from scratch
					within 6 months. Simple, clean, fast, reliable and easy to use. Integrated the third party
					services of geo location, social auth, stripe, google map, google analytics etc. Gained
					more than 1,500 views in LinkedIn within 3 days. Worked closely with QA and Graphic
					Designer via Slack and JIRA on UI design, bugs and enhancements.
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						Built landing page, sign in, sign up, restaurants, menu, order cart, order history,
						google and apple pay, invite link, rating, profile update, friends. Modified backend
						APIs if necessary.
					</li>
					<li className={styles['company-item']}>
						Solved a few technical challenges. Added anonymous user support; Synchronized Food
						category and current scrolling position; Customized axios to handle certain errors in a
						centralized spot; Automated code integration and delivery process using AWS Code
						Pipeline, S3, Cloud Front, IAM, Route 53 etc.
					</li>
				</ul>
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					Technologies: Javascript, Node JS, React, Redux, HTML5, CSS3, SCSS, Express, Hapi,
					Objection, knex, Joi, jest, socket.io
				</p>
				<div className="height-10" />
				<p>
					Tools: VS Code, GIT, Eslint, Prettier, NPM, Chrome, Postman, AWS, Sqlectron, Sql
					WorkBench, Slack, JIRA, Google Hangout.{' '}
				</p>
			</div>
		)
	}

	function renderWilesJackson() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Full Stack Developer Contract</span> (2018.5 - 2018.9 ) WilesJackson Inc,
					Calgary, AB
				</div>
				<p>
					Worked with two other developers on rewriting RewardBank using ReactJs, C#, Postgre Sql
					and Azure. RewardBank is a web site that allows small businesses to set up offers, track
					program success, purchase and issue air miles to customers.
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						Read legacy ruby code, learned and documented business rules. Evaluated technical risks,
						advised on project planning and architecture design. Implemented end to end solution on
						data query for transactions, award summary, collector number statistics, job and email
						log etc. Created APIs and dozens of unit tests for award creation, reversal and
						resubmission. Created C# module to decrypt sensitive information encrypted by old code.
						Optimized performance significantly with indexing. Continuously improved code quality
						via refactoring and unit tests.
					</li>
				</ul>
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					Technologies: Javascript, React, Redux, HTML5, CSS3, SASS, C# Web API, Linq, Entity
					Framework, PostgresSql
				</p>
				<div className="height-10" />
				<p>
					Tools: Visual Studio 2017, GIT, VS Code, IIS, Atom, Eslint, Prettier, NPM, Webpack,
					Chrome, Postman, Swagger, pgAdmin, Slack, Asna, Skype, Azure, Ruby
				</p>
			</div>
		)
	}

	function renderEasyExpress() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Full Stack Developer, Owner</span> (2017.1 - 2018. 5 ) Easy Express Solutions,
					Calgary, AB
				</div>
				<p>
					Designed, developed, tested, and deployed robust, n-tiered user friendly web sites:
					justsimpletech.com, easyfunlunch.com.
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						easyexpresssoft.com: Built, tested and deployed n-tiered enterprise web site using
						Node.js, Express, Postgres Sql, React. This web site offers FREE news and weather
						services. Integrated Google Analytics, Google Map, Weather API, Medium and Youtube
						videos.
					</li>
					<li className={styles['company-item']}>
						easyfunlunch.com: Built and deployed 4 robust n-tiered enterprise web sites using React.
						Integrated Stripe.js online payment. OAuth 2 feature. Create aesthetically pleasing user
						experience. Created 46 automated tests to cover core functionalities. Collaborated with
						Restaurant owners on business process. Worked with OPA!, Subway, and South Gate Alliance
						Church to offer fun lunch program to summer camp students.
					</li>
				</ul>
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					Technologies: Javascript, React, Redux, HTML5, Bootstrap, SASS, Semantic UI, Materialize
					CSS, Node, Express, C# Web API, MongoDB, Sql Developer, Reporting Service, Easylink,
					Passport, Oauth, Google Analytics, Google Map
				</p>
				<div className="height-10" />
				<p>
					Tools: Docker, Digital Ocean, Visual Studio 2015, Studio 3T, Mac OS, Ubuntu, GIT, VS Code,
					Atom, Eslint, Prettier, NPM, Webpack, Chrome, Postman, Stripe.
				</p>
			</div>
		)
	}

	function renderGEMs() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Software Engineer Contract</span> Golden Environmental Mats Services,
					Calgary, AB
				</div>
				<p>
					SmartMat - a tablet asset tracking tool to read RFID tags, track, mark and upload mat
					status (GPS location, time, damaged, contaminated, branded).
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						Implemented SmartMat tablet version using Electron, Node, React, C#. The new version is
						simple, fast, reliable, easy to use, easy to install, well integrated with YUMA GPS
						service (C#), and supports impinj speedway RFID reader.
					</li>
					<li className={styles['company-item']}>
						Built React Native App and deployed to iPhone, and Android, Navigation, animation,
						bluetooth connectivity, GPS, TCP, WIFI, and async storage.
					</li>
				</ul>
			</div>
		)
	}

	function renderCalgary1() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Software Developer, Contract</span> (2015.4 - 2016.12) City of Calgary,
					Calgary, AB
				</div>
				<p>
					Worked as the key developer on ePermit, a web application that allows home builders to
					apply for building permits online. ePermit saved the City and home builders hundreds of
					thousands of dollars from the otherwise manual lengthy reviewing process. Designed and
					implemented robust enterprise services, user friendly UI, visually appealing reports.
					Branched, merged, deployed code in Dev, Test, UA and Train environments. Conducted
					mentoring and code review.
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						Lead web developer of the first 3 releases of Inspection Mobile, a n-tiered mobile web
						site to allow home builders to search, book, reschedule and cancel inspections
						conveniently using mobile devices. Implemented: Vista Authentication, Login, List
						Search, Calendar Search, Cancel/ Reschedule, Inspection History, Revision, Permission to
						Occupy Report. Improved UI responsiveness with loader spinner, alert/success/fail popup.
						Usage was skyrocketing in the first 6 days of use of release 2. Customer reaction is
						overwhelmingly positive. "fantastic!, it is fast and easy to use.", "very, very
						impressive".
					</li>
				</ul>
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					JavaScript, Bootstrap, CSS3, HTML5, C#, ASP.NET, NET 4.0/4.5, jQuery, Visual Studio
					2010/2013, T- Sql, Oracle, Sql Developer, Active Report, TFS 2015, Fiddler, WCF,
					ReSharper, MS Project, Trello, LiveLink, POSSE, CAAF, HPQC.
				</p>
			</div>
		)
	}

	function renderDynamysk() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior System Analyst</span> (2014.7 - 2015.4) Dynamysk Automation, Calgary, AB
				</div>
				<p>
					Key support staff (one of two) on RFO central, the web system widely used by Cenovus,
					Encana, Nexen, Husky, Suncor to maintain high level quality standards by tracking
					equipment checklists and deficiencies in phases across disciplines. Worked closely with
					field service team on design, enhancements, troubleshooting, fixes, configuration and
					deployment. Identified, reproduced, analyzed, and fixed problems. Deployed code fixes and
					database patches to dev and test sites to verify solutions. Documented trouble shooting
					process in JIRA. Deployed QA approved package to production and created release notes.
					Managed and prioritized multiple tasks with minimal assistance. Setup Team city and
					Octopus to automate build, test, package, release and deployment of QR web services.
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						Conducted confident code refactoring to clean system architecture. RFO system were
						gradually damaged due to a 5-year poor code customization. Took the initiative and
						applied module pattern to reduce number of files (Overview feature) from 26 to 11 within
						a week. This feature is no longer the most buggy and hated, but the most clean and
						reliable one. This change saves significant time on future QA, enhancement and bug
						fixing efforts.
					</li>

					<li className={styles['company-item']}>
						Took the initiative and created a WPF tool to switch local development environment to a
						specified one effortlessly within seconds. It saved developers from the time consuming
						disruption of copying site-specific configuration and database. Developed in MVVM
						pattern.
					</li>
				</ul>
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					Javascript, Bootstrap, jQuery, DHTMLx, CSS3, HTML5, Kendo UI, C#, ASP.NET, MVC, WPF, NET
					4.0/4.5, Visual Studio 2010/2013. T-Sql, SQL Server 2008/2012, Sql Profiler, dbUp,
					Tortoise SVN, Subversion, TeamCity, Octopus, JIRA, Azure, Bittorrent Sync, ReSharper, MS
					Test, NUnit, Fiddler, Sql Profiler, NuGet.
				</p>
			</div>
		)
	}

	function renderCalgary2() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior NET Consultant, Contract</span> (2012.10 – 2014.7). City of Calgary, Calgary,
					AB
				</div>
				<p>
					Technical lead on Park Online project, n-tiered system consists of 3 admin sites (Calgary
					Zoo, Transit, Parking Authority), one citizen portal, one batch console, and the back end
					system. Mentored two programmers. Architected, designed and implemented the application
					framework of Web API, data access layer, exception (stack trace) logging, session timeout,
					transaction execution, auditing, , data validation and role based security. Completed
					financial module that includes payment, adjustment, monthly withdrawal, payment due
					notification, monthly end report etc. Lead the effort in building 74 repeatable
					integration tests to cover critical BL functionalities at server tier.
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						CENTS: Worked collaboratively with PM and programmer analyst in delivering a high
						quality, easy to use work flow based n-tiered web system for Corporate Properties &
						Buildings (CPB). The system supports encroachment search, application creation, tracking
						and management. Migrated business functionality from IBM Lotus Notes to City technology
						architecture.
					</li>
				</ul>
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					C# 4.0, Web API, VS 2010, WCF, ASP.NET, MVC, JavaScript, AJAX, JQuery, Active Reports,
					Oracle, Telerik, TFS, Functional Programming, LINQ, CAAF, Scrum, Fiddler, JSON.NET,
					Regular Expression, Visio, UML, CAAF.
				</p>
			</div>
		)
	}

	function renderC4I() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Developer, 6 months Contract</span> (2012.6 – 2012.10). C4I Consultants,
					Calgary, AB
				</div>
				<p>
					Major developer on EPLRS Planner project. EPLRS Planner is an easy-to-use software tool
					that can dramatically reduce time and errors on communication resource planning process.
					Implemented easy-to-use UI modules, this includes plan settings, service settings, plan
					generation, and data validation. Followed the best agile development practices such as TFS
					item check-in, creation, tracking, daily build, continuous integration and iteration
					planning.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>C#, WPF, MVVM, PRISM, Telerik Reporting, Rad Controls, TFS, VS2010.</p>
			</div>
		)
	}

	function renderEnmax() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Programmer Analyst, 6 weeks Contract</span> (2012.4 – 2012.5 ) Enmax,
					Calgary, AB
				</div>
				<p>
					Enhanced Site ID Catalog online search. Modified full text indexing, match calculation and
					data load to support SID search via meter number. Conducted performance impact analysis.
					Wrote technical specification and deployment plan. Conducted knowledge transfer and code
					review.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					SQL Server, T-SQL, Source Safe, Full Text Search, Visual Studio 2005, Web Service, ASP.NET
				</p>
			</div>
		)
	}

	function renderCalgary3() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Developer, Contract </span> (2011.7 – 2012.2), The City of Calgary, Calgary,
					AB
				</div>
				<p>
					Rewrote mission critical FICA system, a “pass through” system that collects money daily
					from Cashier Registry, RPE, Royal Bank EDI, merges, consolidates, distributes money to
					Enmax, Parking Authority, Finance, and Tax departments. Designed, implemented, tested and
					deployed n-layered new FICA solution in 4 months. Lead, coordinated, and executed parallel
					testing on daily basis for 40 continuous days, compare and verify 31 output files and 10
					reports between versions. No business disruption, no exception, no bug since new version
					went live on Nov. 1, 2011.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					C# 4.0, Oracle, WPF, MVVM, Active Report, VB 6, VS 2010, ReSharper, Virtual Machine, TFS,
					PDF component, Click Once, Rhino Mocks.
				</p>
			</div>
		)
	}

	function renderComputerAid() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Developer, Contract </span> (2010.4 – 2011.7) Computer Aid Professional
					Services, Inc. AB
				</div>
				<p>
					Hired as the key resource on Canada Gold Beef (CGB), a project aimed at adding individual
					animal traceability to Daily Gain modules. Created O/R mapping supporting stored
					procedures execution. Added transaction service to ensure business entity and its child
					objects are saved into the database safely or nothing occurs. Track objects and save only
					those modified. Delegate search task to a background thread, allowing the user to cancel a
					long time search gracefully. Implemented features of Arrivals, Shipments, Contacts.
					Developed Reports, SQL scripts, stored procedures, triggers, and functions.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					C# 3.0, VB6, Source safe 2005, SQL 2005, VS 2008, NET 3.5, Crystal Report, ReSharper,
					Test- Driven Net.
				</p>
			</div>
		)
	}

	function renderShaw() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Software Designer </span> (2008.10 – 2010.1), ITSD, Shaw Communications Inc.
					Calgary, AB
				</div>
				<p>
					Designed, developed, maintained and supported applications. Investigated and resolved
					production issues. Coordinated testing and deployment of new releases. Maintained and
					enhanced File Converter, Valigator, Provisioning Direct, Modem Checker etc.
				</p>
				<ul className={styles['achievements']}>
					<li className={styles['company-item']}>
						Sole developer on CLEC Regression Assistant (C# 3.0). A QA tool to simplify SMP testing
						by allowing testers to easily create BLIF, E911, LSR/LSC response files to test SMP
						behaviours. Sole developer. Three-layered architecture. Applied reflection to bind
						between layers. Decoupled UI modules with user controls. Practiced unit testing with 85%
						test coverage.
					</li>
				</ul>
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					C# 3.0, Visual Studio 2008, SQL Server 2008, SQL Server Reporting Services 2008, ASP.NET
					2.0, AJAX, jQuery SOA, IIS 6.0, Team Foundation Server, ReSharper, NUnit, Moq, VISIO.
				</p>
			</div>
		)
	}

	function renderConcordWell() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Technical Lead, Contract </span> (2007.12 – 2008.10), Concord Well Servicing.
					Calgary, AB
				</div>
				<p>
					Designed, developed Job Order Sheet, n-tiered web system. Created application framework
					that supports record locking, activity tracking, error logging, session management, data
					validation, role- based security and data portal. Used reflection and user controls to
					reduce code size. Used AJAX Callback to improve responsiveness. Applied SQL Cache
					Dependency to boost performance.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					C# 2.0, Visual Studio 2005, SQL Server 2005, SQL Server Reporting 2005, ASP.NET 2.0, SOAP
					Web Service, Log4Net, IIS 5.0, Source Safe 2005, Resharper, NUnit 2.1, DevExpress, AJAX,
					jQuery, JSON, HTML/CSS
				</p>
			</div>
		)
	}

	function renderPPS1() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Developer, Contract </span> (2007.1 – 2007.12), Pioneer PetroTech Services.
					Calgary, AB
				</div>
				<p>
					Rewrote Delphi application SmartView in C# 2.0. SmartView interfaces with a series of
					gauges to download, visualize and print data.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					C# 2.0, Visual Studio 2005, Win Form, Ants Profiler, DevExpress, Infragistics, Dundas,
				</p>
			</div>
		)
	}

	function renderGE() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Senior Developer, Contract </span>(2006.4 – 2006.9), NRPS, General Electric Canada,
					Calgary, AB
				</div>
				<p>
					Major developer to Automatic Orthography Retrieval Software project. AORS is a C#
					n-layered object-oriented desktop application to create configurations, start underlying
					C++ processes, monitor online/offline and file retrieval status for up to 500 IED devices.
					Implemented XML serialization to persist settings object. Added business rules validation
					to protect data integrity. Used delegate to update user interface. Adopted Posix IPC to
					facilitate messaging between managed and unmanaged code.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>
					C# 2.0, Visual Studio 2005, Win Form, UML, XML, Delegate, Serialization, Patterns, NUnit.
				</p>
			</div>
		)
	}

	function renderCalSim() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>DBA/Developer </span>(2005.8 - 2006.3) CalSim Technology Inc., Calgary, AB
				</div>
				<p>
					Established and enforced procedure for database change request. Backup, restore and
					replicate database. Tagging and Branching project. Created weekly software builds and
					installations. Produced production and development database updates for major release
					cycles.
				</p>
				<div className="height-20" />
				<p className={styles.link}>Environment:</p>
				<div className="height-10" />
				<p>Win CVS, SQL Server 2005, Install Shield 10, MS Build, Visual Studio 2003, C# 1.1</p>
			</div>
		)
	}
	function renderEPromotions() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Consultant, Contract </span>(2003.9 –2005.8) E Promotions, Calgary, AB
				</div>
				<p>
					Gathered and documented requirements. Conducted feasibility study, effort estimates.
					Developed project plan. Visualized designs. Conducted database analysis and design. Wrote
					maintainable code. Improved software usability according to feedbacks. Built an excellent
					reputation for delivering easy to use quality code. Clients: ICL, CFC, Orthoshop and
					Premier GPS.
				</p>
			</div>
		)
	}

	function renderPPS2() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Delphi Developer </span>(2002.8 – 2003.8), Pioneer Petrotech Services Inc., Calgary,
					AB
				</div>
				<p>
					Carried out corrective, perfective and adaptive maintenance on PPS25. Maintained 12,000
					lines of source code. Researched third party components. Programmed chart, report and
					communication components. Provided application support. Wrote user manuals. Technologies:
					Delphi, VCL.
				</p>
			</div>
		)
	}

	function renderResearchAssociate() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Research Associate </span> (2000.5 – 2002.6), University of Regina, Regina, SK
				</div>
				<p>
					Developed applet version to simplify distribution of TEEMA system (TRLab development and
					execution environment for Java mobile agents). Used class loader chain and protection
					domain security attributes inheritance to support mobile agent loading under Java runtime.
					Technologies: JSP, EJB, JDBC, Cloudscape, Connection Pool, Serialization, Networking,
					Threading, Swing, Security, Applet, MVC, Observer, Perl, Solaris.
				</p>
			</div>
		)
	}

	function renderVTEL() {
		return (
			<div className={styles.company}>
				<div className={styles.position}>
					<span>Technical Support </span> (1997 – 1999), VTEL, Beijing, China
				</div>
				<p>
					VTEL, then world leader in manufacturing videoconferencing products. Provided
					product-related technical support. Conducted training sessions to 150 customers total on
					use of products. Lectured on VTEL H.323 strategy at Tianjin Computer User Group
					Conference. Demonstrated products to China Bank, Shanghai Telecom, HuNan Electric Power.
					Searched and compared competitive products on features.
				</p>
			</div>
		)
	}

	function renderWorkHistory() {
		return (
			<div className={styles.box}>
				<div className={styles['title']}>Work History</div>
				{renderClickDishes()}
				{renderWilesJackson()}
				{renderEasyExpress()}
				{renderGEMs()}
				{renderCalgary1()}
				{renderDynamysk()}
				{renderCalgary2()}
				{renderC4I()}
				{renderEnmax()}
				{renderCalgary3()}
				{renderComputerAid()}
				{renderShaw()}
				{renderConcordWell()}
				{renderPPS1()}
				{renderGE()}
				{renderCalSim()}
				{renderEPromotions()}
				{renderPPS2()}
				{renderResearchAssociate()}
				{renderVTEL()}
			</div>
		)
	}

	return (
		<div className={styles.resume}>
			{renderHeader()}
			{renderHighlights()}
			{renderTechnicalSkills()}
			{renderCourses()}
			{renderEducation()}
			{renderWorkHistory()}
		</div>
	)
}

export default withRouter(page(memo(Resume)))
