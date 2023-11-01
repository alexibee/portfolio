import React, { useState } from 'react';
import { motion } from 'framer-motion';
import CubeCanvas from './3d/Cube';
import Links from './components/links/Links';
import './App.scss';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Skills from './components/skills/Skills';

const components = {
	links: <Links />,
	about: <About />,
	experience: <Experience />,
	portfolio: <Portfolio />,
	contact: <Contact />,
	skills: <Skills />,
};

const App = () => {
	const [isSomeClicked, setIsSomeClicked] = useState(false);
	const [clickedTitle, setClickedTitle] = useState('');

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
		<main>
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
						clickedTitleState={{ clickedTitle, setClickedTitle }}
					/>
				</div>
				{isSomeClicked ? (
					<motion.div
						animate={{ opacity: [0, 1], y: ['20%', '-3%'] }}
						transition={{ ease: 'easeOut', duration: 1 }}
						className='component-container'
					>
						{components[clickedTitle]}
					</motion.div>
				) : (
					<div></div>
				)}
			</div>
		</main>
	);
};

export default App;
