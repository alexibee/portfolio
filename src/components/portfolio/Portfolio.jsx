import React from 'react';
import './portfolio.scss';

const data = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dhoecmw9w/image/upload/v1650379451/production/Recurso_2_qapsbe.png',
    title: 'Superpowerly',
    deployed: 'https://superpowerly.herokuapp.com/',
    github: 'https://github.com/slvgonzalez/superpowerly',
    demo: 'https://troopl.com/aleksejsbrehovs/superpowerly',
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dhoecmw9w/image/upload/v1650379451/production/wheelp-nobg_jrkk0o.svg',
    title: 'Wheelp',
    deployed: 'http://www.wheelp.me/',
    github: 'https://github.com/alexibee/wheelp',
    demo: 'https://troopl.com/aleksejsbrehovs/wheelp',
  }

]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, deployed, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
                <a href={deployed} target="_blank" rel="noreferrer">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                </a>
                <div className='portfolio__item-description'>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
                  <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
                </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}
export default Portfolio
