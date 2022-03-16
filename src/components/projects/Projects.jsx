import React from 'react';
import imgWheelp from '../../assets/wheelp-nobg.svg';
import imgSup from '../../assets/Recurso 2.png';
import Thumbnail from '../thumbnail/Thumbnail.jsx'; // Import the Thumbnail component
import '../../App.scss';

function Projects(props) {
  return (
    // Render a Thumbnail component
    <div className="projects-page">
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
