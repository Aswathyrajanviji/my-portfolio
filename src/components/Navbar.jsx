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
          <a href="/My_Portfolio_Website">
            Home
          </a>
        </li>

        <li>
          <a href="/My_Portfolio_Website/#about">
            About
          </a>
        </li>

        <li>
          <a href="/My_Portfolio_Website/#skills">
            Skills
          </a>
        </li>

        <li>
          <a href="/My_Portfolio_Website/#projects">
            Projects
          </a>
        </li>

        <li>
          <a href="/My_Portfolio_Website/#uiux">
            UI/UX
          </a>
        </li>

        <li>
          <a href="/My_Portfolio_Website/#photography">
            Photography
          </a>
        </li>

        <li>
          <a href="/My_Portfolio_Website/#resume">
            Resume
          </a>
        </li>

        <li>
          <a href="/My_Portfolio_Website/#contact">
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