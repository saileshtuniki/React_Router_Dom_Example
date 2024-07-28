import React from 'react'
import './Project.css';


function Project({title, description, imageUrl, technologies, githubLink, liveDemoLink}) {
  return (
    <div className="project-card">
            {/* <img className="project-image" src={imageUrl} alt={title} /> */}
            <div className="project-details">
                <h3 className="project-title">{title}</h3>

                {/* <div className="project-description">
                  <p>{description}</p>
                </div> */}

                <p className="project-technologies"> <b> Technologies used:</b> {technologies} </p>
                <div className="project-links">
                    {/* {githubLink && <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>}
                    {liveDemoLink && <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>} */}
                </div>
            </div>
        </div>
  )
}

export default Project

