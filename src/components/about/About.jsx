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
          After building some simple tools in VBA for Excel in my previous role, I discovered
          a passion for coding, quit my job, and completed a web development course at Le
          Wagon with a goal to change my life and pursue a career in tech.
          I am skilled in communication, team/project management, able to efficiently work
          both as a part of the team and independently, thriving when working to tight
          deadlines. Multi-lingual - fluent in English, Russian, Latvian, proficient in Finnish.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
