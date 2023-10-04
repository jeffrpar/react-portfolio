import React from 'react';
import './Projects.css'; // Import your CSS file for styling
import bookImg from '../../../assets/images/book-review.JPG';
import textEditorImg from '../../../assets/images/text-editor.JPG';
import moviesImg from '../../../assets/images/movies.JPG';
import socialNetworkImg from '../../../assets/images/social-network-api.JPG';
import quizImg from '../../../assets/images/quiz-app.JPG';
import ecommerceImg from '../../../assets/images/ecommerce.JPG';
import bundleSparesImg from '../../../assets/images/bundle-spares-screenshot.JPG'

function Projects() {
  const projects = [
    {
      title: 'Bundle Spares',
      description: 'Bundle Spares provides a unique service by offering spare keys for video games that users can claim.',
      demoLink: 'http://bundlespares.com/',
      repoLink: 'https://github.com/jeffrpar/bundle-spares',
      image: bundleSparesImg,
    },
    {
      title: 'Book Review App',
      description: 'Explore an extensive collection of books spanning diverse genres and written by talented authors.',
      demoLink: 'https://book-review-utsa-835f37f9b48c.herokuapp.com/',
      repoLink: 'https://github.com/jeffrpar/book-review',
      image: bookImg,
    },
    {
      title: 'Text Editor',
      description: 'A Progressive Web Application text editor. This text editor connects to an IndexedDB, and can be installed and used offline.',
      demoLink: 'https://text-editor-utsa-61be1b363975.herokuapp.com/',
      repoLink: 'https://github.com/jeffrpar/pwa-text-editor',
      image: textEditorImg,
    },
    {
      title: 'Movie Search App',
      description: 'An app created to help users find what to watch based on user-selected criteria (i.e. genre, keywork, etc.',
      demoLink: 'https://jakecas77.github.io/Parkers-Drive-In/',
      repoLink: 'https://github.com/JakeCas77/Parkers-Drive-In',
      image: moviesImg,
    },
    {
      title: 'Social Network API',
      description: 'This application uses MongoDB to create and manage the back-end for a social network. It allows the user to use CRUD functions that will edit the database. ',
      demoLink: 'https://github.com/jeffrpar/social-network-api',
      repoLink: 'https://github.com/jeffrpar/social-network-api',
      image: socialNetworkImg,
    },
    {
      title: 'Quiz App',
      description: 'An app using HTML, CSS, and JavaScript created to help users learn web development.',
      demoLink: 'https://jeffrpar.github.io/quiz-app/index.html',
      repoLink: 'https://github.com/yourusername/project5',
      image: quizImg,
    },
    {
      title: 'E-Commerce Back End',
      description: 'This project uses MySQL and Sequelize to create the back end of an e-commerce site. This can be used to show information about products and track inventory.',
      demoLink: 'https://github.com/jeffrpar/ecommerce-back-end',
      repoLink: 'https://github.com/jeffrpar/ecommerce-back-end',
      image: ecommerceImg,
    },
  ];

  return (
    <section className="projects">
      <div className="projects-content">
        <h2>Portfolio</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div key={index} className="project">
              <img src={project.image} alt={project.name} />
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
