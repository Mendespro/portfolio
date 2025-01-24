import React from "react";
import "../styles/Skills.css";
import htmlIcon from "../assets/icons8-html.svg";
import cssIcon from "../assets/icons8-css.svg";
import javascriptIcon from "../assets/icons8-js.svg";
import nodeIcon from "../assets/icons8-nodejs.svg";
import cIcon from "../assets/icons8-c.svg";
import cppIcon from "../assets/icons8-cpp.svg";
import javaIcon from "../assets/icons8-java.svg";
import pythonIcon from "../assets/icons8-python.svg";
import postgresIcon from "../assets/icons8-postgres.svg";
import githubIcon from "../assets/icons8-github.svg";
import fastifyIcon from "../assets/fastify.svg";
import vueIcon from "../assets/icons8-vue.svg";
import reactIcon from "../assets/icons8-react.svg";
import mysqlIcon from "../assets/icons8-mysql.svg";
import csharpIcon from "../assets/icons8-csharp.svg";
import gitIcon from "../assets/icons8-git.svg";
import figmaIcon from "../assets/icons8-figma.svg";

const technologies = [
  { name: "HTML", icon: htmlIcon },
  { name: "CSS", icon: cssIcon },
  { name: "JavaScript", icon: javascriptIcon },
  { name: "Node.js", icon: nodeIcon },
  { name: "C", icon: cIcon },
  { name: "Github", icon: githubIcon },
  { name: "Figma", icon: figmaIcon },
  { name: "C++", icon: cppIcon },
  { name: "Java", icon: javaIcon },
  { name: "Git", icon: gitIcon },
  { name: "Python", icon: pythonIcon },
  { name: "PostgreSQL", icon: postgresIcon },
  { name: "Fastify", icon: fastifyIcon },
  { name: "Vue", icon: vueIcon },
  { name: "React", icon: reactIcon },
  { name: "MySQL", icon: mysqlIcon },
  { name: "C#", icon: csharpIcon },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="title-skill">
        <h2>Tecno<span>logias</span></h2>
      </div>
      <div className="scroll" style={{'--t':'30s'}}>
        {technologies.map((tech, index) => (
          <div key={index} className="scroll-item">
              <img
                src={tech.icon}
                alt={tech.name}
                className="icon"
                loading="lazy"
              />
          </div>
        ))}
        {technologies.map((tech, index) => (
          <div key={index + technologies.length} className="scroll-item">
            <img
              src={tech.icon}
              alt={tech.name}
              className="icon"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;