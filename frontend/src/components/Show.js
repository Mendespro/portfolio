import React from "react";
import "../styles/Show.css";
import persona from "../assets/persona.png";
const Show = () => {
  return (
    <section id="show" className="show-me">
        <div className="interface">
            <div className="flex">
                <div className="img-show">
                    <img src={persona} alt="persona" />
                </div>
                <div className="txt-show">
                    <h1>Tenha <span>.</span></h1>
                    <p>
                        Olá, sou um desenvolvedor apaixonado por criar soluções 
                        inovadoras na web. Tenho experiência em JavaScript, React,
                        Node.js, e outras tecnologias. Gosto de resolver problemas
                        e melhorar a experiência do usuário com minhas aplicações.
                    </p>
                    <div className="btn-contact">
                        <a href="#contact">
                            <button>Entre em contato</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default Show;