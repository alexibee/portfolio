import React from 'react';
import imgWheelp from './wheelp-nobg.png';
import imgSup from './Recurso 2.png';
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.scss';

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="projects-page">
      <h1>Projects</h1>
      <div className="projects">
        <Thumbnail
          link="/wheelp"
          image={imgWheelp}
          title="Wheelp (original 2-week project)"
          category="Web app"
        />
        <Thumbnail
          link="/superpowerly"
          image={imgSup}
          title="Superpowerly (1-week airbnb clone)"
          category="Web app"
        />
      </div>
    </div>
  )
}

export default Projects;
