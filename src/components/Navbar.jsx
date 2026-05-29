import React from 'react';
import './Navbar.css';

function Navbar() {

  return (

    <nav className="navbar">

      <div className="logo">
        Aswathy RV
      </div>

      <ul className="nav-links">

        <li>
          <a href="/">
            Home
          </a>
        </li>

        <li>
          <a href="#about">
            About
          </a>
        </li>

        <li>
          <a href="#skills">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects">
            Projects
          </a>
        </li>

        <li>
          <a href="#uiux">
            UI/UX
          </a>
        </li>

        <li>
          <a href="#photography">
            Photography
          </a>
        </li>

        <li>
          <a href="#resume">
            Resume
          </a>
        </li>

        <li>
          <a href="#contact">
            Contact
          </a>
        </li>

      </ul>

      <div className="moon">
        📸
      </div>

    </nav>

  );
}

export default Navbar;