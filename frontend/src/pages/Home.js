import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import { getProjects } from "../services/api";
import { useState, useEffect } from "react";
import "../styles/Home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <div className="home">
      <Header />
      <AboutMe />
      <Skills />
      <section id="projects" className="projects">
        <h2>Meus Projetos</h2>
        <div className="projects-container">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      <Contact />
    </div>
  );
};

export default Home;
