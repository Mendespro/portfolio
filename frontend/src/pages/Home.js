import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Show from "../components/Show";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";
import { getProjects } from "../services/api";
import "../styles/Home.css";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getProjects();
        setProjects(response.data);
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };

    fetchProjects();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="home">
      <Header />
      <Show />
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
      {showScrollTop && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </div>
  );
};

export default Home;
