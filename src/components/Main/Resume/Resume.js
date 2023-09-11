import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume">
      <div className="resume-content">
        <h2>Resume</h2>
        <div className="proficiencies">
          <h3>Proficiencies</h3>
          <ul>
            <li>Web Development (HTML, CSS, JavaScript)</li>
          </ul>
        </div>
        <div className="resume-download">
          <h3>Download My Resume</h3>
          <p>
            You can download my resume in PDF format to learn more about my skills and experience.
          </p>
          <a href="" download>
            Download Resume (PDF)
          </a>
        </div>
      </div>
    </section>
  );
}

export default Resume;
