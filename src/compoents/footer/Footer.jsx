import "./footer.css";
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {currentYear} Adrian Tut </p>
      </div>
    </footer>
  );
};

export default Footer;
