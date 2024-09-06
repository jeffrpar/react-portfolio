import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaGithub, FaLinkedin } from 'react-icons/fa'; // Import icons from a library like react-icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/jeffrpar" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://www.linkedin.com/in/jeffrpar/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
        </div>
        <span>© Jeff Parker. All rights reserved.</span>
      </div>
    </footer>
  );
}

export default Footer;
