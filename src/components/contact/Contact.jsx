import React from 'react';
import './contact.scss';
import { MdOutlineEmail } from 'react-icons/md';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm(
			'service_bn9xe6q',
			'template_8zi9ken',
			form.current,
			'WdUY_-7e1qFALD56s'
		);

		e.target.reset();
	};

	return (
		<section id='contact'>
			<h2>Get In Touch</h2>

			<div className='container contact__container'>
				<div className='contact__options'>
					<a
						href='mailto:aleksejs.brehovs@gmail.com'
						target='_blank'
						rel='noreferrer'
					>
						<article className='contact__option'>
							<MdOutlineEmail className='contact__option-icon' />
							<h4>Email</h4>
							<h5>aleksejs.brehovs@gmail.com</h5>
							<h6>Send a message</h6>
						</article>
					</a>
				</div>

				<form
					ref={form}
					onSubmit={sendEmail}
				>
					<input
						type='text'
						name='name'
						placeholder='Your Full Name'
						required
					/>
					<input
						type='email'
						name='email'
						placeholder='Your Email'
						required
					/>
					<textarea
						name='message'
						rows='7'
						placeholder='Your Message'
						required
					></textarea>
					<button
						type='submit'
						className='btn btn-primary'
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
};

export default Contact;
