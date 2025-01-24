import React from "react";
import "../styles/AboutMe.css";
import me from "../assets/me.jpg";
import profile from "../assets/utils/profile.pdf";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div>
        <div className="interface-me">
          <div className="text-me">
            <div>
                <h2>Mais Sobre <span>Mim</span></h2>
            </div>
            <div>
                <div>
                  <p>
                    Sou desenvolvedor front-end trabalho principalmente com <span>HTML</span>, <span>CSS</span>, <span>JavaScript</span>. Faço uso também de tecnologias como <span>Vue</span>, <span>React</span> para meus projetos. Além de fazer uso do <span>Figma</span> para o design quando necessário e utilizar para o controle de versionamento <span>Git</span> e <span>Github</span>
                  </p>
                </div>
                <div>
                  <p>
                    Ademais, sendo Cientista da computação sou capacitado e tenho experiência com outras tecnologias como <span>Python</span>, <span>C</span>, <span>Fastify</span>, <span>Node</span>, <span>Postgres</span> entre outras.
                  </p>
                </div>
                <div>
                  <p>
                    Estudante e entusiasta em Gamedev com <span>Unity</span>.
                  </p>
                </div>
            </div>
            <div className="btn-profile">
                <a href={profile} target="_blank" rel="noopener noreferrer">
                  <button>Ver CV</button>
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
