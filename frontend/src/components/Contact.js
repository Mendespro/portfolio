import React from "react";
import "../styles/Contact.css";
import githubIcon from "../assets/icons8-github1.svg";
import linkedinIcon from "../assets/icons8-linkedin.svg";
import instagramIcon from "../assets/icons8-instagram-48.svg";
import brazilFlag from "../assets/icons8-brasil-48.png";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="title-contact">
        <h2>
          Contate<span>-me</span>
        </h2>
      </div>
      <div className="contact-container">
        <div className="contact-left">
          <div className="contact-item">
            <img src={brazilFlag} alt="Brazil" className="flag-icon" />
            <p>+55 73 99928-5967</p>
          </div>
          <div className="contact-item">
            <p>mendes.isaias9@gmail.com</p>
          </div>
        </div>
        <div className="contact-center"></div>
        <div className="contact-right">
          <a
            href="https://github.com/Mendespro/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubIcon} alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/isaias-mendes-971873226/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinIcon} alt="LinkedIn" />
          </a>
          <a
            href="https://www.instagram.com/isaias.rome/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
