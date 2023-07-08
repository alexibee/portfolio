import React from 'react';

const CTA = () => {
	return (
		<div className='cta'>
			<a
				href='https://res.cloudinary.com/dhoecmw9w/image/upload/v1688854264/Aleksejs_Brehovs_Resume_25-06-23-_umjbeq.pdf'
				download
				rel='noreferrer'
				target='_blank'
				className='btn'
			>
				Download CV
			</a>
			<a
				href='#contact'
				className='btn btn-primary'
			>
				Contact me
			</a>
		</div>
	);
};

export default CTA;
