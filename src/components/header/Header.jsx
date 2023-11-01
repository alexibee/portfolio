import React, { useEffect, useRef, useState } from 'react';
import './header.scss';
import CTA from './CTA';
import CubeCanvas from '../../3d/Cube';
import {
	AnimatePresence,
	motion,
	useAnimation,
	useInView,
	useMotionValue,
	useTransform,
} from 'framer-motion';
import About from '../about/About';
import Contact from '../contact/Contact';
import Experience from '../experience/Experience';
import Portfolio from '../portfolio/Portfolio';
import Skills from '../skills/Skills';
import Links from '../links/Links';

const Header = () => {
	const [isSomeClicked, setIsSomeClicked] = useState(false);
	// const cubeVariants = {
	// 	clicked: { opacity: 1, y: '-35%', width: '100px' },
	// 	unClicked: { opacity: [0, 1], y: 0 },
	// };

	// useEffect(() => {
	// 	if (isSomeClicked) {
	// 		console.log('clicked');

	// 		animationControls.start(cubeVariants.clicked);
	// 	} else {
	// 		console.log('unClicked');
	// 		animationControls.start(cubeVariants.unClicked);
	// 	}
	// 	return () => {
	// 		animationControls.stop();
	// 	};
	// }, [isSomeClicked]);

	return (
		<header id='home'>
			<div className='top-nav'>
				<motion.h1
					animate={{ opacity: [0, 1, 0] }}
					transition={{ ease: 'easeOut', delay: 1, duration: 3 }}
					className='gradient-text'
					id='welcome'
				>
					Welcome.
				</motion.h1>
				{!isSomeClicked && (
					<motion.h1
						animate={{ opacity: [0, 1] }}
						transition={{ ease: 'easeOut', delay: 2, duration: 2 }}
						className='gradient-text'
						id='pick-side'
					>
						Pick your side
					</motion.h1>
				)}
			</div>
			<div className='header__container'>
				<div className='cube-container'>
					<CubeCanvas
						isSomeClickedState={{ isSomeClicked, setIsSomeClicked }}
					/>
				</div>
				{isSomeClicked ? (
					<motion.div
						animate={{ opacity: [0, 1], y: ['20%', '-3%'] }}
						transition={{ ease: 'easeOut', duration: 1 }}
						className='component-container'
					>
						<Links />
						{/* <About /> */}
						{/* <Experience /> */}
						{/* <Portfolio /> */}
						{/* <Contact /> */}
						{/* <Skills /> */}
					</motion.div>
				) : (
					<div></div>
				)}
				{/* <div>
					<h1>Alexi Brehovs</h1>
					<h5 className='text-light'>Full-Stack Developer</h5>
					<CTA />
				</div> */}
				{/* <div className='me'>
					<div className='me__inner'>
						<div className='me__inner-logo'>
							<img
								src='https://res.cloudinary.com/dhoecmw9w/image/upload/v1650382490/production/logo_ab_tyzadd.svg'
								alt='logo'
							/>
						</div>
						<div className='me__inner-link'>
							<a href='#about'>
								<svg className='arrows'>
									<path
										className='a1'
										d='M0 0 L30 32 L60 0'
									></path>
									<path
										className='a2'
										d='M0 20 L30 52 L60 20'
									></path>
									<path
										className='a3'
										d='M0 40 L30 72 L60 40'
									></path>
								</svg>
							</a>
						</div>
					</div> */}
				{/* </div> */}
			</div>
		</header>
	);
};

export default Header;
