import React from "react";
import "../styles/AboutMe.css";
import me from "../assets/me.jpg";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div>
        <div className="interface">
          <div className="text-me">
          <h2>Mais Sobre <span>Mim</span></h2>
              <div><p>
                Sou desenvolvedor front-end trabalho principalmente com HTML, CSS, JavaScript. 
                Faço uso também de tecnologias como Vue, React para meus projetos. 
                Além de fazer uso do Figma para o design quando necessário e utilizar para o 
                controle de versionamento Git e Github.
              </p>
            </div>
            <div>
              <p>
                Ademais, sendo Cientista da computação sou capacitado e tenho experiência com 
                outras tecnologias como Python, C, Fastify, Node, Postgres entre outras.
              </p>
            </div>
            <div>
              <p>
                Estudante e entusiasta em Gamedev com Unity.
              </p>
            </div>
            <div className="btn-profile">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <button>Contate-me</button>
              </a>
            </div>
          </div>
          <div className="img-me">
            <img src={me} alt="persona" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
