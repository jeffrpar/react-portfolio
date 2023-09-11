import React from 'react';
import './Projects.css'; // Import your CSS file for styling

function Projects() {
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
    {
      title: 'Project 3',
      description: 'Description of Project 3.',
      demoLink: 'https://project3-demo.com',
      repoLink: 'https://github.com/yourusername/project3',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4.',
      demoLink: 'https://project4-demo.com',
      repoLink: 'https://github.com/yourusername/project4',
    },
    {
      title: 'Project 5',
      description: 'Description of Project 5.',
      demoLink: 'https://project5-demo.com',
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
