// src/components/Navbar/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return (
    <nav className="navbar">
      <h1 className="brand-title">
        <Link to="/">Prayer Pulse &#9790;</Link>
      </h1>
      <a href="#" className="toggle-button">
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </a>
      <div className="navbar-links">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
          <li><Link to="/prayertimes">Prayer Times</Link></li>
          <li><Link to="/learnmore">Learn More</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
