import React, { useState, useEffect } from "react";
import "../styles/Home.css";

import Header from "../components/Header";
import Show from "../components/Show";
import AboutMe from "../components/AboutMe";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import ProjectCard from "../components/ProjectCard";
import Footer from "../components/Footer";

import aboutIcon from "../assets/icons8-about-me-48.svg";
import projectsIcon from "../assets/icons8-projects-48.svg";
import skillsIcon from "../assets/icons8-skills-48.svg";
import contactIcon from "../assets/icons8-call-48.svg";
import showIcon from "../assets/icons8-show-48.svg";

import project1 from "../assets/projects/projeto1.png";
import project2 from "../assets/projects/projeto2.png";
import project3 from "../assets/projects/projeto3.png";
import project4 from "../assets/projects/projeto4.png";
import project5 from "../assets/projects/projeto5.png";
import video1 from "../assets/projects/ProjetoMyTracker.mp4";

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [showScrollIcons, setShowScrollIcons] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isProjectsVisible, setIsProjectsVisible] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const mockProjects = [
          {
            id: 1,
            title: "MyTracker",
            description: "Projeto da faculdade em grupo no qual fiquei responsável por produzir a Home page do MyTracker (site que oferece espaço para amantes de cultura pop terem o controle do que estão vendo ou lendo e dar seu feedback).",
            image: project1, 
            link1: video1,
            link2: "https://github.com/colcic-uesc/front-end-project-bobos",
          },
          {
            id: 2,
            title: "Pagina Home da Netflex",
            description: "Produção de uma versão da pagina da netflix para por em pratica as habilidades de desenvolvimento.",
            image: project2,
            link1: "https://mendespro.github.io/netflix-clone/",
            link2: "https://github.com/Mendespro/netflix-clone",
          },
          {
            id: 3,
            title: "Pagina de Seleção",
            description: "Foi feito uma pagina dinâmica de seleção de personagens para aprimorar as habilidades de front-end",
            image: project3,
            link1: "https://mendespro.github.io/x-men-szpc/",
            link2: "https://github.com/Mendespro/x-men-szpc",
          },
          {
            id: 4,
            title: "Landing Page",
            description: "Produção de uma versão da pagina da netflix para por em pratica as habilidades de desenvolvimento.",
            image: project4,
            link1: "https://mendespro.github.io/landing-page/",
            link2: "https://github.com/Mendespro/landing-page",
          },
          {
          id: 5,
          title: "Pokedex",
          description: "Desenvolvimento de Front-end de uma versão de Pokedex modo claro e escuro.",
          image: project5,
          link1: "https://mendespro.github.io/projeto-listagem-pokemon/",
          link2: "https://github.com/Mendespro/projeto-listagem-pokemon",
        },
        ];
        setProjects(mockProjects);
      } catch (error) {
        console.error("Erro ao carregar projetos:", error);
      }
    };

    const observeHeader = () => {
      const header = document.querySelector(".header");
      const observer = new IntersectionObserver(
        ([entry]) => {
          setShowScrollIcons(!entry.isIntersecting);
        },
        { threshold: 0.1 }
      );

      if (header) {
        observer.observe(header);
      }

      return () => {
        if (header) observer.unobserve(header);
      };
    };

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);

      const projectsSection = document.getElementById("projects");
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        setIsProjectsVisible(rect.top < window.innerHeight && rect.bottom >= 0);
      }
    };

    fetchProjects();
    observeHeader();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <Header />
      {showScrollIcons && (
        <div className="scroll-icons">
          <button onClick={() => smoothScroll("show")}>
            <img src={showIcon} alt="Show" />
          </button>
          <button onClick={() => smoothScroll("about")}>
            <img src={aboutIcon} alt="Sobre Mim" />
          </button>
          <button onClick={() => smoothScroll("skills")}>
            <img src={skillsIcon} alt="Habilidades" />
          </button>
          <button onClick={() => smoothScroll("projects")}>
            <img src={projectsIcon} alt="Projetos" />
          </button>
          <button onClick={() => smoothScroll("contact")}>
            <img src={contactIcon} alt="Contato" />
          </button>
        </div>
      )}
      <Show />
      <AboutMe />
      <Skills />
      <section id="projects" className={`projects ${isProjectsVisible ? "visible" : ""}`}>
        <div className="title-projects">
          <h2>
            Meus <span>Projetos</span>
          </h2>
        </div>
        <div className="projects-container">
          {isProjectsVisible &&
            projects.map((project) => (
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
