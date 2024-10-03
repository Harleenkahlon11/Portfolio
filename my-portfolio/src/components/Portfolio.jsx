// src/components/Portfolio.js
import React from 'react';
import './Portfolio.css';  // Import the CSS file for styling

const projects = [
  {
    id: 1,
    title: 'Readme Master',
    description: 'This is a short description of Readme Master.',
    image: 'https://via.placeholder.com/400x300',
    link: 'https://github.com/Harleenkahlon11/readme-master.git',
  },
  {
    id: 2,
    title: 'Vehicle Builder',
    description: 'This is a short description of Vehicle Builder.',
    image: 'https://via.placeholder.com/400x300',
    link: 'https://github.com/Harleenkahlon11/Vehicle-Builder.git',
  },
  {
    id: 3, 
    title: 'Bytes-n- Bites',
    description: 'This is a short description of Bytes-n- Bites.',
    image: 'https://via.placeholder.com/400x300',
    link: 'https://github.com/ChinaCat1998/Bytes-n-Bites-Web-Development.git',
  },
  // Add more projects here
];

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h2>My Portfolio</h2>
      <div className="portfolio-grid">
        {projects.map((project) => (
          <div key={project.id} className="portfolio-item">
            <img src={project.image} alt={project.title} className="portfolio-image" />
            <div className="portfolio-info">
              <h3 className="portfolio-title">{project.title}</h3>
              <p className="portfolio-description">{project.description}</p>
              <a href={project.link} className="portfolio-link">View More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
