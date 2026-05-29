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
          <a href="/my-portfolio">
            Home
          </a>
        </li>

        <li>
          <a href="/my-portfolio/#about">
            About
          </a>
        </li>

        <li>
          <a href="/my-portfolio/#skills">
            Skills
          </a>
        </li>

        <li>
          <a href="/my-portfolio/#projects">
            Projects
          </a>
        </li>

        <li>
          <a href="/my-portfolio/#uiux">
            UI/UX
          </a>
        </li>

        <li>
          <a href="/my-portfolio/#photography">
            Photography
          </a>
        </li>

        <li>
          <a href="/my-portfolio/#resume">
            Resume
          </a>
        </li>

        <li>
          <a href="/my-portfolio/#contact">
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