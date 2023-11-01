import React, { useState } from 'react';
import './about.scss';
import { FaAward } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';
import Socials from './Socials';
import CTA from './CTA';

const About = () => {
	// const [flip, setFlip] = useState(false);

	return (
		<section id='about'>
			<h1 className='gradient-text'>About me</h1>
			<div className='about__container'>
				<img
					className='about__me-image'
					src='https://res.cloudinary.com/dhoecmw9w/image/upload/v1650377128/production/me_ysy0ww.jpg'
					alt='About'
				/>
				{/* <div className='about__content'>
					<div className='about__cards'>
						<article className={`about__card${flip ? ' flip' : ''}`}>
							<div
								className='front'
								onClick={() => setFlip(!flip)}
							>
								<AiOutlineUser className='about__icon' />
								<h1>About Me</h1>
							</div>
							<div
								className='back'
								onClick={() => setFlip(!flip)}
							> */}
				<div>
					<h3>Hi there!</h3>
					<p>
						My name is{' '}
						<span className='gradient-text text-bold'>Alexi Brehovs</span>, and
						I am a{' '}
						<span className='gradient-text text-bold'>
							full stack developer
						</span>
						. <br /> In January 2022 I quit my job as a buyer within health &
						beauty industry and decided to try something new. I had been playing
						around with VBA for Excel in my previous job and liked the
						creativity behind the process and the overall experience so much
						that I decided to pursue a career in coding. I went through a coding
						bootcamp and have since been working as a developer. <br /> So far I
						have been mostly working with JavaScript-heavy stack, so I guess you
						can say this is my specialty, although I have had some experience
						with PHP, Python and Ruby too, and being at the start of my tech
						career, I am open to experiences with any language or framework as
						long as I learn, tackle interesting challenges, and have an actual
						input in the team's success.
					</p>
					<CTA />
				</div>
				{/* </div>
						</article>
						<CTA />
					</div>
				</div> */}
			</div>
		</section>
	);
};

export default About;
