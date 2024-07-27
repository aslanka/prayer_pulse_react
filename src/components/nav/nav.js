// src/components/Navbar/Navbar.js
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './nav.css';
import Logo from '../../assets/light.jpg'

const Nav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
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
            <li>
              <Link to="/" className={currentPath === '/' ? 'active' : ''}>Home</Link>
            </li>
            <li>
              <Link to="/chatbot" className={currentPath === '/chatbot' ? 'active' : ''}>PrayerPulse AI</Link>
            </li>
            <li>
              <Link to="/prayertimes" className={currentPath === '/prayertimes' ? 'active' : ''}>Prayer Times</Link>
            </li>
            <li>
              <Link to="/learnmore" className={currentPath === '/learnmore' ? 'active' : ''}>Learn More</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="img-container">
          <Link to="/">
            <img id="logo" src={Logo} alt="logo" />
          </Link>
        </div>
      <footer>
        <p>
          &copy; 2024 <Link to="/">Prayer Pulse.</Link> All rights reserved. | &#9993; achught1@uncc.edu | Charlotte, NC 28213
        </p>
      </footer>
    </>
  );
};

export default Nav;
