import { SiCodewars } from 'react-icons/si';
import { AiOutlineGithub } from 'react-icons/ai';
import { AiOutlineLinkedin } from 'react-icons/ai';
import './links.scss';

const Links = () => {
	return (
		<>
			{/* <div style={{ display: 'flex', justifyContent: 'center' }}>
				<img
					style={{ width: '200px' }}
					src='https://res.cloudinary.com/dhoecmw9w/image/upload/v1650382490/production/logo_ab_tyzadd.svg'
					alt='logo'
				/>
			</div> */}
			<h1 className='gradient-text'>Connect online</h1>
			<div className='links__socials'>
				<a
					href='https://github.com/alexibee'
					target='_blank'
					rel='noreferrer'
				>
					<AiOutlineGithub />
				</a>
				<a
					href='https://www.linkedin.com/in/alexi-brehovs/'
					target='_blank'
					rel='noreferrer'
				>
					<AiOutlineLinkedin />
				</a>
				{/* <a href='https://www.codewars.com/users/alexibee'>
					<SiCodewars />
				</a> */}
			</div>
		</>
	);
};

export default Links;
