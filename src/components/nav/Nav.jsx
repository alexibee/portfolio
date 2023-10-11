import React from 'react';
import './nav.scss';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { AiOutlineRead } from 'react-icons/ai';
import { AiOutlineFolderOpen } from 'react-icons/ai';
import { BiMessageSquareDetail } from 'react-icons/bi';
// import {useState} from 'react'
import Scrollspy from 'react-scrollspy';

const Nav = () => {
	return (
		<nav>
			<Scrollspy
				items={['home', 'about', 'portfolio', 'contact']}
				currentClassName='active'
			>
				<a
					className='navlink'
					href='#home'
				>
					<AiOutlineHome />
				</a>
				<a
					className='navlink'
					href='#about'
				>
					<AiOutlineUser />
				</a>
				{/* <a className="navlink" href="#experience" ><AiOutlineRead/></a> */}
				<a
					className='navlink'
					href='#portfolio'
				>
					<AiOutlineFolderOpen />
				</a>
				<a
					className='navlink'
					href='#contact'
				>
					<BiMessageSquareDetail />
				</a>
			</Scrollspy>
		</nav>
	);
};

export default Nav;
