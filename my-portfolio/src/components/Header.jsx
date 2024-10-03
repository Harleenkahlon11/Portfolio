import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <h1>Harleen Kaur</h1>
      <nav className="navbar">
        <a href="/About">About Me</a>
        <a href="/Portfolio">Portfolio</a>
        <a href="/Contact">Contact</a>
        <a href="/Resume">Resume</a>
      </nav>
    </header>
  );
};

export default Header;
