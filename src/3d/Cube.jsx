import * as THREE from 'three';
import React, { useEffect, useRef, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import {
	CycleRaycast,
	Decal,
	Float,
	OrbitControls,
	useCursor,
	useTexture,
} from '@react-three/drei';
import { motion } from 'framer-motion';
import contact from '../assets/contact.png';
import eye from '../assets/eye.png';
import link from '../assets/link.png';
import briefcase from '../assets/briefcase.png';
import fire from '../assets/fire.png';
import question from '../assets/question.png';

const CubeCanvas = ({ isSomeClickedState, clickedTitleState }) => {
	const [{ objects, cycle }, set] = useState({ objects: [], cycle: 0 });
	const { isSomeClicked, setIsSomeClicked } = isSomeClickedState;
	const { clickedTitle, setClickedTitle } = clickedTitleState;

	const isTitleDisplayed = !!(objects.length && objects[cycle].object.title);

	useEffect(() => {
		setClickedTitle(() =>
			objects.length && objects[cycle].object.title
				? objects[cycle].object.title.toLowerCase().split(' ')[0]
				: ''
		);
	}, [isSomeClicked]);

	const cubeVariants = {
		clicked: { opacity: [0, 1], y: '-45%' },
		unClicked: { opacity: [0, 1], y: 0 },
	};

	return (
		<motion.div
			style={{
				width: isSomeClicked ? '20vw' : '100vw',
				height: isSomeClicked ? '16vh' : '80vh',
			}}
			variants={cubeVariants}
			animate={isSomeClicked ? 'clicked' : 'unClicked'}
			transition={{ ease: 'easeOut', duration: 3 }}
		>
			{/* CycleRaycast's status data can now be turned into informative HTML */}
			<div
				className='status'
				style={{ height: '3rem' }}
			>
				{objects.length && !isSomeClicked ? (
					<motion.div
						animate={{ y: 20 }}
						transition={{ ease: 'easeOut', duration: 1 }}
						className='name gradient-text'
						children={objects[cycle].object.title}
					/>
				) : null}
				{/* {isSomeClicked ? (
					<motion.div
						animate={{ y: 20 }}
						transition={{ ease: 'easeOut', duration: 1 }}
						className='name gradient-text'
						style={{ left: 14, padding: 0 }}
						children={clickedTitle}
					/>
				) : null} */}
			</div>
			<Canvas
				dpr={2}
				camera={{ position: [5, 5, 3], fov: 90 }}
			>
				<Float
					speed={1.75}
					rotationIntensity={3}
					floatIntensity={5}
				>
					{/* <ambientLight
						intensity={8}
						position={[-10, -10, -5]}
					/> */}
					<directionalLight
						position={[0, 0, 8]}
						intensity={6}
					/>
					<Face
						isSomeClicked={isSomeClicked}
						setIsSomeClicked={setIsSomeClicked}
						isTitleDisplayed={isTitleDisplayed}
						icon={briefcase}
						name={'face-' + 1}
						title={'Experience'}
						rotation={[0, 0, Math.PI * 2]}
						position={[0, 0, 2.15]}
					/>
					<directionalLight
						position={[0, 0, -8]}
						intensity={6}
					/>
					<Face
						isSomeClicked={isSomeClicked}
						setIsSomeClicked={setIsSomeClicked}
						isTitleDisplayed={isTitleDisplayed}
						icon={contact}
						name={'face-' + 2}
						title={'Contact me'}
						rotation={[0, 0, -Math.PI * 2]}
						position={[0, 0, -2.15]}
					/>
					<directionalLight
						position={[-8, 0, 0]}
						intensity={6}
					/>
					<Face
						isSomeClicked={isSomeClicked}
						setIsSomeClicked={setIsSomeClicked}
						isTitleDisplayed={isTitleDisplayed}
						icon={fire}
						name={'face-' + 3}
						title={'Skills'}
						rotation={[0, -Math.PI / 2, 0]}
						position={[-2.15, 0, 0]}
					/>
					<directionalLight
						position={[8, 0, 0]}
						intensity={6}
					/>
					<Face
						isSomeClicked={isSomeClicked}
						setIsSomeClicked={setIsSomeClicked}
						isTitleDisplayed={isTitleDisplayed}
						icon={eye}
						name={'face-' + 4}
						title={'Portfolio'}
						rotation={[0, Math.PI / 2, 0]}
						position={[2.15, 0, 0]}
					/>
					<directionalLight
						position={[0, 8, 0]}
						intensity={6}
					/>
					<Face
						isSomeClicked={isSomeClicked}
						setIsSomeClicked={setIsSomeClicked}
						isTitleDisplayed={isTitleDisplayed}
						icon={question}
						name={'face-' + 5}
						title={'About me'}
						rotation={[-Math.PI / 2, 0, 1.5 * Math.PI]}
						position={[0, 2.15, 0]}
					/>
					<directionalLight
						position={[0, -8, 0]}
						intensity={6}
					/>
					<Face
						isSomeClicked={isSomeClicked}
						setIsSomeClicked={setIsSomeClicked}
						isTitleDisplayed={isTitleDisplayed}
						icon={link}
						name={'face-' + 6}
						title={'Links'}
						rotation={[Math.PI / 2, 0, 0]}
						position={[0, -2.15, 0]}
					/>
				</Float>
				<OrbitControls enableZoom={false} />

				<CycleRaycast
					preventDefault={false}
					onChanged={(objects, cycle) => set({ objects, cycle })}
				/>
				{/* This component cycles through the raycast intersections, combine it with event.stopPropagation! */}
			</Canvas>
		</motion.div>
	);
};

function Face({
	icon,
	isSomeClicked,
	setIsSomeClicked,
	isTitleDisplayed,
	...props
}) {
	const ref = useRef();
	const [hovered, setHovered] = useState(false);
	const [clicked, setClicked] = useState(false);
	const handleClick = () => {
		if (!isTitleDisplayed) return;
		setClicked(!clicked);
		setIsSomeClicked(!isSomeClicked);
	};
	// useFrame((state) => ref.current.scale.setScalar(isSomeClicked ? 0.5 : 1));
	const decal = useTexture(icon);
	// Sets document.body.style.cursor: useCursor(flag, onPointerOver = 'pointer', onPointerOut = 'auto')
	useCursor(hovered);
	useEffect(() => {
		if (!isSomeClicked) {
			setHovered(false);
			setClicked(false);
		}
	}, [isSomeClicked]);

	return (
		<mesh
			{...props}
			ref={ref}
			onClick={(e) => (e.stopPropagation(), handleClick())}
			onPointerOver={(e) => (e.stopPropagation(), setHovered(true))}
			onPointerOut={(e) => (e.stopPropagation(), setHovered(false))}
		>
			<boxGeometry args={[4, 4, 0.3]} />
			<meshPhongMaterial
				depthTest
				color={
					clicked
						? '#0207FF'
						: !hovered
						? 'black'
						: !isSomeClicked
						? '#02075D'
						: 'black'
				}
				polygonOffset
				polygonOffsetFactor={-4}
				side={THREE.DoubleSide}
			/>
			<Decal
				position={[0, 0, 0]}
				rotation={[0, 0, 0]}
				scale={2}
				map={decal}
			/>
		</mesh>
	);
}

export default CubeCanvas;
