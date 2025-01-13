import React, { useState, useEffect } from "react";
import axios from "axios";

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await axios.get("http://localhost:5000/api/projetos");
      setProjects(response.data);
    };

    fetchProjects();
  }, []);

  return (
    <section>
      <h2>Projetos</h2>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h3>{project.titulo}</h3>
            <p>{project.descricao}</p>
            <a href={project.link} target="_blank" rel="noreferrer">
              Ver Mais
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
