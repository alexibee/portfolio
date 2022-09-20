import React from "react"
import './about.scss'
import {FaAward} from 'react-icons/fa'
import {VscFolderLibrary} from 'react-icons/vsc'
import Socials from './Socials'

const About = () => {

  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src='https://res.cloudinary.com/dhoecmw9w/image/upload/v1650377128/production/me_ysy0ww.jpg' alt="About" />
          </div>
          <Socials />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Education</h5>
              <p>2022 - Le Wagon London bootcamp graduate</p>
              <p>2014 - Music Technology BSc 1st Class Hons</p>
            </article>

            <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <p>2 Projects and counting :) </p>
            </article>
          </div>
          <p>
          Junior Full Stack Developer with professional experience working for a busy fintech start-up, participating in challenging
          projects both as part of the team and independently, delivering value under tight deadlines.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
