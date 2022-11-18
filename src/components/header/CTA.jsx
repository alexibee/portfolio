import React from 'react';

const CTA = () => {
	return (
		<div className='cta'>
			<a
				href='https://res.cloudinary.com/dhoecmw9w/image/upload/v1668771398/production/Aleksejs_Brehovs_Resume_18-11_u3r5dt.pdf'
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
