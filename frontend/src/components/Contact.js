import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Email enviado com sucesso!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("Erro ao enviar o email.");
      }
    } catch (error) {
      setStatus("Erro ao enviar o email.");
      console.error(error);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="title-contact">
        <h2>Contate<span>-me</span></h2>
      </div>
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="letter-contact">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Seu nome"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Seu email"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Escreva sua mensagem aqui..."
            required
          />
          <div>
            <button type="submit">Enviar</button>
          </div>
          {status && <p className="status">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;