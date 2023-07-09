import React, { useState } from 'react';
import './about.scss';
import { FaAward } from 'react-icons/fa';
import { AiOutlineUser } from 'react-icons/ai';
import { VscFolderLibrary } from 'react-icons/vsc';
import Socials from './Socials';
import CTA from './CTA';

const About = () => {
	const [flip, setFlip] = useState(false);

	return (
		<section id='about'>
			<div className='container header__container'>
				<h2> Hi there!</h2>
				<div>
					<h1>
						My name is <span> Alexi</span>
					</h1>
				</div>
				<h3>I am a Full-Stack Developer</h3>
			</div>
			<div className='container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img
							src='https://res.cloudinary.com/dhoecmw9w/image/upload/v1650377128/production/me_ysy0ww.jpg'
							alt='About'
						/>
					</div>
					<Socials />
				</div>

				<div className='about__content'>
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
							>
								<p>
									In January 2022 I quit my job as a buyer for Health and Beauty
									products and decided to try something new. I had been playing
									around with VBA for Excel in my previous job and liked the
									creativity behind the process and the overall experience so
									much that I decided to pursue a career in coding. I went
									through a coding bootcamp and have since been working as a
									Full Stack Developer. <br /> So far I have been mostly working
									with JavaScript-heavy stack, so I guess you can say this is my
									specialty. However, being at the start of my tech career, I am
									open to experiences with any language or framework as long as
									I learn, tackle interesting challenges, and have an actual
									input in the team's success.
								</p>
							</div>
						</article>
						<CTA />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
