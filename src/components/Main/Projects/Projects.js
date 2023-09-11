import React from 'react';
import './Projects.css'; // Import your CSS file for styling

function Projects() {
  // Sample project data (you can replace this with your actual project data)
  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1.',
      demoLink: 'https://project1-demo.com',
      repoLink: 'https://github.com/yourusername/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2.',
      demoLink: 'https://project2-demo.com',
      repoLink: 'https://github.com/yourusername/project2',
    },
    // Add more project objects as needed
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
