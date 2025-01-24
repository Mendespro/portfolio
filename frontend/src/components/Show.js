import React from "react"; 
import "../styles/Show.css";
import persona from "../assets/persona.png";
import githubIcon from "../assets/icons8-github1.svg";
import linkedinIcon from "../assets/icons8-linkedin.svg";
import instagramIcon from "../assets/icons8-instagram-48.svg";

const Show = () => {
  return (
    <section id="show" className="show-me">
        <div className="interface">
            <div className="img-show">
                <img src={persona} alt="persona" />
            </div>
            <div className="txt-show">
                <div>
                    <h4>Olá<span>,</span> Seja Bem-Vindo<span>.</span></h4>
                </div>
                <div>
                    <h1>Sou <span data-text="Isaias">Isaias</span></h1>
                </div>
                <div>
                    <p>
                        Desenvolvedor Front-end, mas que tem experiência com Back-end também.
                    </p>
                    <div className="social-icons">
                        <a href="https://github.com/Mendespro/" target="_blank" rel="noopener noreferrer">
                            <img src={githubIcon} alt="GitHub" />
                        </a>
                        <a href="https://www.linkedin.com/in/isaias-mendes-971873226/" target="_blank" rel="noopener noreferrer">
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </a>
                        <a href="https://www.instagram.com/isaias.rome/" target="_blank" rel="noopener noreferrer">
                            <img src={instagramIcon} alt="Instagram" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Show;
