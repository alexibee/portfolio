import React from 'react';
import './portfolio.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import santaclaws from '../../assets/santaclaws.png';

const data = [
	{
		id: 1,
		image:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1667422647/development/strive_logo_gtyhgr.svg',
		title: 'Strive',
		deployed: 'https://visionary-gnome-0c4186.netlify.app',
		github: 'https://github.com/alexibee/strive',
		stack: 'React/TypeScript, Firebase',
	},
	{
		id: 2,
		image: santaclaws,
		title: 'Secret Santa App',
		deployed: 'https://fabulous-alpaca-d44f99.netlify.app/',
		github: 'https://github.com/alexibee/secret-santa-rails',
		stack: 'React, Ruby on Rails, PostgreSQL',
	},
	{
		id: 3,
		image:
			'https://res.cloudinary.com/dhoecmw9w/image/upload/v1650379451/production/wheelp-nobg_jrkk0o.svg',
		title: 'Wheelp',
		deployed: 'https://wheelp.fly.dev',
		github: 'https://github.com/alexibee/wheelp',
		stack: 'Ruby on Rails, PostgreSQL',
	},
];

const Portfolio = () => {
	return (
		<section id='portfolio'>
			<h2>Portfolio</h2>

			<div className='container portfolio__container'>
				<Carousel
					showStatus={false}
					showThumbs={false}
				>
					{data.map(({ id, image, title, deployed, github, stack }) => {
						return (
							<div
								className='portfolio__item'
								key={id}
							>
								<a
									href={deployed}
									target='_blank'
									rel='noreferrer'
									style={{ backgroundColor: 'white' }}
								>
									<div className='portfolio__item-image'>
										<img
											src={image}
											alt={title}
											style={{ height: '40vh', objectFit: 'contain' }}
										/>
									</div>
								</a>

								<div className='portfolio__item-description'>
									<div>
										<h2>{title}</h2>
										<h5>{stack}</h5>
									</div>
									<div className='portfolio__item-cta'>
										<a
											href={github}
											className='btn'
											target='_blank'
											rel='noreferrer'
										>
											Github
										</a>
										{/* <a
												href={demo}
												className='btn btn-primary'
												target='_blank'
												rel='noreferrer'
											>
												Demo
											</a> */}
									</div>
								</div>
							</div>
						);
					})}
				</Carousel>
			</div>
		</section>
	);
};
export default Portfolio;
