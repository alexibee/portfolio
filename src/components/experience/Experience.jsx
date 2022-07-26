import React from 'react'
import './experience.scss'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Things I can do</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">

        <div className="experience__development">

          <h3>Software/Web Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>JavaScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>TypeScript</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>React</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>PHP/Laravel</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>Ruby on Rails</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>SQL</h4>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon"/>
              <h4>PostgreSQL, MySQL </h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
