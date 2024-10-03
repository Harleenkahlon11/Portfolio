import React from 'react';
import './AboutMe.css';

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="container">
        <h2>About Me</h2>
        <div className="avatar-section">
          <img
            src="https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png"  // Replace this with your own avatar image URL
            alt="Harleen Kaur"
            className="avatar"
          />
        </div>
        <p>
            Hi, I'm Harleen Kaur, a passionate web developer with experience in building dynamic
            websites and applications. I love coding, problem-solving, and creating intuitive user
            interfaces that make people's lives easier.
          </p>
          <p>
            I specialize in front-end development using React, JavaScript, and CSS. My goal is to
            build responsive, user-friendly websites that perform well on all devices. When I'm not
            coding, you can find me exploring new technologies, reading, or playing video games.
          </p>
      </div>
    </section>
  );
};

export default AboutMe;
