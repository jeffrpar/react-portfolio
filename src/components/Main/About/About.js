import React from 'react';
import './About.css'; // Import your CSS file for styling

function About() {
  return (
    <section className="about">
      <div className="about-content">
        {/* Add your photo or avatar here */}
        <img
          src="../../../assets/images/headshot-garden.jpg"
          alt="Jeff Parker"
          className="about-photo"
        />

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            {/* Add a short bio about yourself */}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            bibendum magna non ex volutpat, et dapibus nisl fringilla.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
