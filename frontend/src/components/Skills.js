import React from "react";
import "../styles/Skills.css";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <h2>Minhas Habilidades</h2>
      <div className="skills-container">
        <div className="skills-card">
          <h3>Frontend</h3>
          <ul>
            <li><i className="fab fa-html5"></i> HTML</li>
            <li><i className="fab fa-css3-alt"></i> CSS</li>
            <li><i className="fab fa-js"></i> JavaScript</li>
            <li><i className="fab fa-bootstrap"></i> Bootstrap</li>
            <li><i className="fab fa-tailwind-css"></i> Tailwind CSS</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Backend</h3>
          <ul>
            <li><i className="fab fa-node"></i> Node.js</li>
            <li><i className="fab fa-python"></i> Python</li>
            <li><i className="fab fa-php"></i> PHP</li>
            <li><i className="fas fa-database"></i> SQL</li>
            <li><i className="fas fa-server"></i> NoSQL</li>
          </ul>
        </div>
        <div className="skills-card">
          <h3>Frameworks</h3>
          <ul>
            <li><i className="fab fa-react"></i> React.js</li>
            <li><i className="fas fa-code"></i> Next.js</li>
            <li><i className="fas fa-code-branch"></i> Django</li>
            <li><i className="fas fa-code-branch"></i> Django REST</li>
            <li><i className="fas fa-code"></i> Laravel</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Skills;
