import React, { useState, useEffect } from "react";
import "../styles/Header.css";

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
              <button onClick={() => smoothScroll("skills")}>Habilidades</button>
            </li>
            <li>
              <button onClick={() => smoothScroll("projects")}>Projetos</button>
            </li>
          </ul>
        </nav>
      </div>
      <div className="btn-contact">
        <button onClick={() => smoothScroll("contact")}>Contate-me</button>
      </div>
    </header>
  );
};

export default Header;
