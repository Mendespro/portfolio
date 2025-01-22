import React, { useState, useEffect } from "react";
import "../styles/Header.css";
import aboutIcon from "../assets/icons8-about-me-48.svg";
import projectsIcon from "../assets/icons8-projects-48.svg";
import skillsIcon from "../assets/icons8-skills-48.svg";
import contactIcon from "../assets/icons8-call-48.svg";
import showIcon from "../assets/icons8-show-48.svg";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const smoothScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <span>ISAIAS</span><span className="lastn">MEN.</span>
      </div>
      <div className="menu">
        <nav className={isScrolled ? "hidden" : ""}>
          <ul>
            <li>
              <button onClick={() => smoothScroll("show")}>Show</button>
            </li>
            <li>
              <button onClick={() => smoothScroll("about")}>Sobre Mim</button>
            </li>
            <li>
              <button onClick={() => smoothScroll("projects")}>Projetos</button>
            </li>
            <li>
              <button onClick={() => smoothScroll("skills")}>Habilidades</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btn-contact">
        <button onClick={() => smoothScroll("contact")}>Contate-me</button>
      </div>
      <div className="scroll-icons">
        {isScrolled && (
          <>
            <button onClick={() => smoothScroll("show")}><img src={showIcon} alt="Show" /></button>
            <button onClick={() => smoothScroll("about")}><img src={aboutIcon} alt="Sobre Mim" /></button>
            <button onClick={() => smoothScroll("projects")}><img src={projectsIcon} alt="Projetos" /></button>
            <button onClick={() => smoothScroll("skills")}><img src={skillsIcon} alt="Habilidades" /></button>
            <button onClick={() => smoothScroll("contact")}><img src={contactIcon} alt="Contato" /></button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
