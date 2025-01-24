import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => (
  <div className={`project-card ${project.id % 2 === 0 ? "slide-left" : "slide-right"}`}>
    <div className="project-card-image">
      <img src={project.image} alt={project.title} />
    </div>
    <div className="project-card-content">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <div className="project-card-buttons">
        <a href={project.link1} target="_blank" rel="noopener noreferrer">
          <button>Ver</button>
        </a>
        <a href={project.link2} target="_blank" rel="noopener noreferrer">
          <button>GitHub</button>
        </a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
