import { useEffect, useMemo, useState } from 'react';
import './skills.scss';
import { skillSources, skillsList, getSkillsSources } from './skillsList';
import { motion } from 'framer-motion';

const Skill = ({ skill, index }) => {
	const yOffset = 20;
	const frequency = 10;
	const [amplitude, setAmplitude] = useState(160 * (window.innerHeight / 790));
	const [xOffset, setXOffset] = useState(18 * (window.innerWidth / 1180));
	const [hint, setHint] = useState(false);

	const coords = useMemo(() => {
		const yPos = amplitude * Math.sin(frequency * index) + yOffset;
		return (index + 1) % 2 !== 0
			? { x: index * xOffset, y: yPos }
			: { x: -index * xOffset, y: yPos };
	}, [amplitude, xOffset]);

	const randomSize = () =>
		Math.floor(Math.random() * 3) + (34 - skill.importance * 2);

	const [fontSize, setFontSize] = useState(
		randomSize() * (window.innerWidth / 1180)
	);

	useEffect(() => {
		window.addEventListener('resize', () => {
			setFontSize(randomSize() * (window.innerWidth / 1180));
			setAmplitude(160 * (window.innerHeight / 790));
			setXOffset(18 * (window.innerWidth / 1180));
		});
		return () => {
			window.removeEventListener('resize', () => {
				setFontSize(randomSize() * (window.innerWidth / 1180));
				setAmplitude(160 * (window.innerHeight / 790));
				setXOffset(18 * (window.innerWidth / 1180));
			});
		};
	}, []);

	return (
		<motion.div
			className='skill__item'
			animate={{
				x: coords.x,
				y: coords.y,
			}}
		>
			<h3
				onPointerEnter={() => setHint(true)}
				onPointerLeave={() => setHint(false)}
				style={{
					fontSize: fontSize,
				}}
			>
				{skill.name}
			</h3>
			<div
				className={`hint${hint ? ' active' : ''}`}
				style={{
					fontSize: hint ? 7 : 0,
				}}
			>
				<p>
					{skill.source.includes(0)
						? 'Gained my skills through'
						: 'Commercial experience at:'}
				</p>
				<p>{getSkillsSources(skill.source, skillSources).join(', ')}</p>
			</div>
		</motion.div>
	);
};

const Skills = () => {
	return (
		<section id='skills'>
			<h1 className='gradient-text'>My Skills</h1>
			<h5 className='gradient-text'>Some technologies I worked with</h5>
			<div className='skills__container'>
				{skillsList.map((skill, index) => (
					<Skill
						skill={skill}
						key={index}
						index={index}
					/>
				))}
			</div>
		</section>
	);
};

export default Skills;
