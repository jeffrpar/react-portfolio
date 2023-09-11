import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import icons from a library like react-icons

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="https://github.com/jeffrpar" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </a>
          <a href="https://linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </a>
          <a href="https://twitter.com/yourtwitter" target="_blank" rel="noopener noreferrer">
            <FaTwitter /> Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
