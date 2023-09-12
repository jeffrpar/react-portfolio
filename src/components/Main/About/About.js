import React from "react";
import "./About.css"; // Import your CSS file for styling
import myImage from '../../../assets/images/headshot.jpg';

function About() {
  return (
    <section className="about">
      <div className="about-content">
        {/* Add your photo or avatar here */}
        <img
          src={myImage}
          alt="Jeff Parker"
          className="about-photo"
        />

        <div className="about-text">
          <h2>About Me</h2>
          <p>
            Hi there! I'm Jeff Parker, an enthusiastic junior web developer with
            a passion for creating interactive and user-friendly websites. My
            journey into the world of web development started with a deep
            curiosity for how websites work, and I've been on an exciting
            learning adventure ever since.
          </p>
          <p>
            I have a strong foundation in front-end technologies, including
            HTML, CSS, and JavaScript. I love bringing designs to life and
            making web applications come to life with responsive and intuitive
            user interfaces. I'm also versed in utilizing the MERN stack to
            create servers capable of hosting databases.
          </p>
          <p>
            What I find most rewarding about web development is the opportunity
            to solve real-world problems through technology. I enjoy
            collaborating with others, learning from experienced developers, and
            staying up-to-date with the latest industry trends and best
            practices.
          </p>
          <p>
            When I'm not coding, you can often find me exploring new coding
            challenges, or working on personal projects that allow me to
            experiment with new technologies. I'm excited about the endless
            possibilities the world of web development offers and look forward
            to contributing to innovative projects in the future.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
