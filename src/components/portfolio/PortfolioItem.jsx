import { useState } from 'react';
import ReactModal from 'react-modal';

const PortfolioItem = ({
	id,
	image,
	title,
	deployed,
	github,
	stack,
	description,
	demo,
	demoDescription,
}) => {
	const [isModalOpen, setIsOpenModal] = useState(false);

	ReactModal.setAppElement('#root');

	return (
		<div className='portfolio-item-wrapper'>
			<div
				className='portfolio__item'
				style={{
					height: '250px',
					backgroundColor: 'rgba(255, 255, 255, 1)',
					backgroundImage: `url(${image})`,
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'contain',
					backgroundPosition: 'center',
				}}
			>
				{/* <a
  href={deployed}
  target='_blank'
  rel='noreferrer'
> */}
				{/* <div className='portfolio__item-image'>
  <img
    src={image}
    alt={title}
    style={{ height: '40vh', objectFit: 'contain' }}
  />
</div> */}
				{/* </a> */}

				<div className='portfolio__item-description'>
					<div className='text-container'>
						<h3>{title}</h3>
						<p>{description}</p>
						<h6>{stack}</h6>
					</div>
					<div className='portfolio__item-cta'>
						{github ? (
							<a
								href={github}
								className='btn'
								target='_blank'
								rel='noreferrer'
							>
								Github
							</a>
						) : null}
						{demo ? (
							<>
								<a
									onClick={() => setIsOpenModal(true)}
									className='btn'
									target='_blank'
									rel='noreferrer'
								>
									Demo
								</a>
								<ReactModal
									isOpen={isModalOpen}
									contentLabel='demo'
									shouldCloseOnOverlayClick={true}
									onRequestClose={() => setIsOpenModal(false)}
									style={{
										overlay: {
											position: 'fixed',
											top: 0,
											left: 0,
											right: 0,
											bottom: 0,
											backgroundColor: 'rgba(0, 0, 0, 0.5)',
										},
										content: {
											margin: '0 auto',
											width: 'fit-content',
											height: 'fit-content',
											padding: '40px',
											border: '1px solid #fff',
											overflow: 'auto',
											WebkitOverflowScrolling: 'touch',
											borderRadius: '20px',
											outline: 'none',
											backgroundImage:
												'radial-gradient(circle at top right, rgb(18, 17, 17) 70%, hsl(270, 100%, 50%), hsl(240, 100%, 50%), hsl(210, 100%, 50%))',
										},
									}}
								>
									<div className='modal__close'>
										<button onClick={() => setIsOpenModal(false)}>
											{' '}
											&times;{' '}
										</button>
									</div>
									<div
										style={{
											display: 'flex',
											flexDirection: 'column',
											justifyContent: 'center',
											alignItems: 'center',
											width: '640px',
										}}
									>
										<iframe
											title='demo video'
											type={'text/html'}
											width={'640'}
											height={'390'}
											src={demo}
										></iframe>
										<p>{demoDescription || description}</p>
									</div>
								</ReactModal>
							</>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioItem;
