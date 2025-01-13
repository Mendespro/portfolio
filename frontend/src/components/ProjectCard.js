import React from "react";
import "../styles/ProjectCard.css";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <h2>{project.title}</h2>
    <p>{project.description}</p>
    <a href={project.link} target="_blank" rel="noopener noreferrer">
      Saiba mais
    </a>
  </div>
);

export default ProjectCard;
