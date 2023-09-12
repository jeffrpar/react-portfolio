import React from 'react';
import './Projects.css'; // Import your CSS file for styling

function Projects() {
  const projects = [
    {
      title: 'Book Review App',
      description: 'Explore an extensive collection of books spanning diverse genres and written by talented authors.',
      demoLink: 'https://book-review-utsa-835f37f9b48c.herokuapp.com/',
      repoLink: 'https://github.com/jeffrpar/book-review',
    },
    {
      title: 'Text Editor',
      description: 'A Progressive Web Application text editor app.',
      demoLink: 'https://text-editor-utsa-61be1b363975.herokuapp.com/',
      repoLink: 'https://github.com/jeffrpar/pwa-text-editor',
    },
    {
      title: 'Movie Search App',
      description: 'An app created to help users find what to watch based on user-selected criteria (i.e. genre, keywork, etc.',
      demoLink: 'https://jakecas77.github.io/Parkers-Drive-In/',
      repoLink: 'https://github.com/JakeCas77/Parkers-Drive-In',
    },
    {
      title: 'Social Network API',
      description: 'This application uses MongoDB to create and manage the back-end for a social network. It allows the user to use CRUD functions that will edit the database. ',
      demoLink: 'https://github.com/jeffrpar/social-network-api',
      repoLink: 'https://github.com/jeffrpar/social-network-api',
    },
    {
      title: 'Quiz App',
      description: 'An app using HTML, CSS, and JavaScript created to help users learn web development.',
      demoLink: 'https://jeffrpar.github.io/quiz-app/index.html',
      repoLink: 'https://github.com/yourusername/project5',
    },
    {
      title: 'Project 6',
      description: 'Description of Project 6.',
      demoLink: 'https://project6-demo.com',
      repoLink: 'https://github.com/yourusername/project6',
    },
  ];

  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Portfolio</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                  Demo
                </a>
                <a href={project.repoLink} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
