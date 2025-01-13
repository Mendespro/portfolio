import React, { useState } from "react";
import "../styles/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Mensagem enviada: " + message);
    setMessage("");
  };

  return (
    <section id="contact" className="contact">
      <h2>Contato</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Escreva sua mensagem aqui..."
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
};

export default Contact;
