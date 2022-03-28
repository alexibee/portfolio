import React from 'react'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Things I can do</h5>
      <h2>My Skills</h2>
      <div className="container experience__container">

        <div className="experience__frontend">

          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article>
              <BsPatchCheckFill />
              <h4>HTML</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>CSS</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>React</h4>
            </article>
          </div>
        </div>

        <div className="experience__backend">

          <h3>Backend Development</h3>
          <div className="experience__content">
            <article>
              <BsPatchCheckFill />
              <h4>Ruby on Rails</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>SQL</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>PostgreSQL</h4>
            </article>
            <article>
              <BsPatchCheckFill />
              <h4>Node JS</h4>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
