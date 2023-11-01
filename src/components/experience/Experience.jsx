import React from 'react';
import './experience.scss';
import { BsPatchCheckFill } from 'react-icons/bs';
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import briefcase from '../../assets/briefcase.png';

import 'react-vertical-timeline-component/style.min.css';

// import { styles } from '../styles';
// import { experiences } from '../constants';
// import { SectionWrapper } from '../hoc';
// import { textVariant } from '../utils/motion';
const experiences = [
	{
		title: 'Full Stack Developer',
		company_name: 'STOP THE TRAFFIK',
		date: 'February 2023 - Present',
		points: [
			'Stack used: JavaScript (React, Node/Express, React Native), MongoDB, various AWS services, IBM Cloud services',
			'- Delivered a sentiment analysis tool (FE + BE + UI design) as an addition to the existing B2B web app in collaboration with the in-house and third-party data teams - (React+MUI, Node/Express, MongoDB)',
			'- Worked on improving the user experience and fixing bugs within the in-house mobile app, which helped to maintain good rating and increase user count for both iOS and android by over 20% in 3 months (React Native, Node/Express, AWS, MS SQL)',
			'- Collaborated with the data team and third-party engineers working on a B2B web app providing tools for tracking and visualisation of human trafficking data, and a mobile app for reporting suspected cases of human trafficking (bug fixes, tests, new features)',
			'- Regular deployment and updates of mobile app to App Store and Play Store, as well as Backend to AWS Elastic Beanstalk',
			'- Regular deployment of web app to Kubernetes cluster running on IBM Cloud, TLS/SSL certificate setup for Ingress',
			'- Helped the wider team with managing two websites hosted on Wix and WordPress as well as providing mobile app performance data',
		],
	},
	{
		title: 'Junior Full Stack Developer',
		company_name: 'Performativ',
		date: 'May 2022 - September 2022',
		points: [
			'Stack used: React, TypeScript, Laravel, PHP, MySQL',
			'Worked on following projects/features/tasks:',
			'- Infinite scroll grid with back-end sorting and filtering (React, PHP/Laravel, SQL)',
			'- Excel import wizard improvement (React)',
			'- CRUD and more advanced flows, API (React, TypeScript, PHP/Laravel, SQL)',
			'- Writing feature/unit tests (PHP/Laravel)',
			'- Other back-end and front-end bug fixes',
		],
	},
];

const ExperienceCard = ({ experience }) => {
	return (
		<VerticalTimelineElement
			contentStyle={{
				background: '#4117c1',
				color: '#fff',
			}}
			contentArrowStyle={{ borderRight: '7px solid #4117c1' }}
			date={experience.date}
			iconStyle={{ background: '#6304c9' }}
			icon={
				<div style={{ padding: '0.6rem' }}>
					<img
						src={briefcase}
						alt={experience.company_name}
					/>
				</div>
			}
		>
			<div>
				<h3>{experience.title}</h3>
				<h5 style={{ margin: 0 }}>{experience.company_name}</h5>
			</div>

			<ul>
				{experience.points.map((point, index) => (
					<li
						key={`experience-point-${index}`}
						style={{ fontSize: '0.7rem' }}
					>
						{point}
					</li>
				))}
			</ul>
		</VerticalTimelineElement>
	);
};

const Experience = () => {
	return (
		<motion.section
			initial='hidden'
			whileInView='show'
			viewport={{ once: true, amount: 0.25 }}
		>
			<motion.div>
				<h1 className='gradient-text'>Work Experience</h1>
			</motion.div>
			<div>
				<VerticalTimeline lineColor='#7504EA'>
					{experiences.map((experience, index) => (
						<ExperienceCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</div>
		</motion.section>
	);
};

export default Experience;
