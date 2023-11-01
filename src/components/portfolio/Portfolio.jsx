import React from 'react';
import './portfolio.scss';
import santaclaws from '../../assets/santaclaws.png';
import tah from '../../assets/TAH.png';
import bank from '../../assets/bank.png';
import PortfolioItem from './PortfolioItem';

const data = [
	{
		id: 1,
		image: tah,
		title: 'Traffik Analysis Hub',
		stack: 'JavaScript/React + MUI, Node.js/Express, MongoDB',
		demo: 'https://res.cloudinary.com/dhoecmw9w/video/upload/v1698859717/jnypqb8kx2qtptbp5opm.mp4',
		description:
			'Web application I worked on during my time with Stop The Traffik. One of the biggest inputs of mine was a full stack sentiment analysis tool which you can see in the demo',
	},
	{
		id: 2,
		image: bank,
		title: 'Performativ',
		stack:
			'TypeScript/React + Ant Design, PHP/Laravel, TypeScript/Node.js, AWS, MySQL',
		demo: 'https://res.cloudinary.com/dhoecmw9w/video/upload/v1698860275/ehkesyuashp8o4w98yt8.mp4',
		demoDescription:
			"A white label app I was working on as part of the team at Performativ. One of the additions I worked on a full stack flow pulling in Industry/Sector and Region/Country information for specific financial instruments from an external api. This information which was then mapped to the displayable values the form was populated with at instrument's creation time within the app. These details had to be modifiable with CRUD operations and were then displayed within the relevant pie charts on the front-end.",
		description:
			'A white label app I was working on as part of the team at Performativ. You can see one of the additions I worked on in the demo.',
	},
	{
		id: 3,
		image:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667422647/development/strive_logo_gtyhgr.svg',
		title: 'Strive',
		deployed: 'https://visionary-gnome-0c4186.netlify.app',
		github: 'https://github.com/alexibee/strive',
		description:
			'Simple e-commerce app with a shopping cart and checkout I worked on to learn the basics of React and TypeScript',
		stack: 'React/TypeScript, Firebase',
	},
	{
		id: 4,
		image: santaclaws,
		title: 'Secret Santa App',
		deployed: 'https://fabulous-alpaca-d44f99.netlify.app/',
		github: 'https://github.com/alexibee/secret-santa-rails',
		description:
			'A secret santa app I built in Ruby on Rails and React for practice',
		stack: 'React, Ruby on Rails, PostgreSQL',
	},
	{
		id: 5,
		image:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1650379451/production/wheelp-nobg_jrkk0o.svg',
		title: 'Wheelp',
		deployed: 'https://wheelp.fly.dev',
		github: 'https://github.com/alexibee/wheelp',
		description:
			'My first project built as a monolith in Ruby on Rails during the bootcamp I attended.',
		stack: 'Ruby on Rails, PostgreSQL',
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h1 className='gradient-text'>My Works</h1>

			<ul className='portfolio__container'>
				{data.map(
					({
						id,
						image,
						title,
						deployed,
						github,
						stack,
						description,
						demoDescription,
						demo,
					}) => {
						return (
							<li key={id}>
								<PortfolioItem
									image={image}
									title={title}
									deployed={deployed}
									github={github}
									stack={stack}
									description={description}
									demo={demo}
									demoDescription={demoDescription}
								/>
							</li>
						);
					}
				)}
			</ul>
		</section>
	);
};
export default Portfolio;
