// src/components/Resume.js
import React from 'react';
import './Resume.css';  // Importing CSS for styling

function Resume() {
  return (
    <div>
      <section className="resume">
        <div className="resume-content">
          <h2>My Resume</h2>
          <p>Download my latest resume below:</p>
          
          {/* Download Button */}
          <a 
            href="/Resume.pdf" 
            download="Resume" 
            className="download-btn"
          >
            Download Resume
          </a>
        </div>
      </section>
      <div className="resume-container">
        <header className="resume-header">
          <h1>Harleen Kaur</h1>
          <p>Front-End & Back-End Developer</p>
          <p>Email: abc@example.com | Phone: (123) 456-7890 | LinkedIn: linkedin.com/in/harleen08</p>
        </header>

        <section className="resume-section">
          <h2>Summary</h2>
          <p>
        Skilled in both front-end and back-end technologies, 
            with a passion for solving complex problems and delivering clean, maintainable code.
          </p>
        </section>

        <section className="resume-section">
          <h2>Skills</h2>
          <div className="skills">
            <div>
              <h3>Front-End Skills</h3>
              <ul>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>React.js, </li>
               
                <li>Responsive Web Design</li>
                <li>Typescript</li>
              </ul>
            </div>
            <div>
              <h3>Back-End Skills</h3>
              <ul>
                <li>Node.js</li>
           
                <li>MySQL, PostgreSQL</li>
                <li>Authentication & Authorization (JWT, OAuth)</li>
                <li>Version Control (Git, GitHub)</li>
              </ul>
            </div>
          </div>
        </section>

       
        <section className="resume-section">
          <h2>Education</h2>
          <p><strong>BS in Computer Science</strong> | University of XYZ | Graduated: 2022</p>
        </section>

        <footer className="resume-footer">
          <p>Contact me at <a href="abc@example.com">abc@example.com</a> or visit my <a href="https://github.com/Harleenkahlon11">GitHub</a> for more projects.</p>
        </footer>
      </div>
    </div>
  );
}

export default Resume;
