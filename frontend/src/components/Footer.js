import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} Isaias R. Mendes. Todos os direitos reservados.</p>
    </footer>
  );
};

export default Footer;
