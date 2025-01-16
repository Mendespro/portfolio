import React from "react";
import Header from "../components/Header";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
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

  // Função para detectar o final da página
  const handleScroll = () => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.scrollHeight
    ) {
      // Reinicia a rolagem para o início
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Adiciona o evento de scroll
  window.addEventListener("scroll", handleScroll);

  // Remove o evento de scroll ao desmontar o componente
  return () => window.removeEventListener("scroll", handleScroll);
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
      <Footer />
    </div>
  );
};

export default Home;
