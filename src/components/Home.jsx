import React from 'react';
import './Home.css';
import profile from '../images/a1.jpeg';

function Home() {
  return (

    <section id="home" className="home">

      <div className="home-left">

        <h3>Hello, I'm</h3>

        <h1>Aswathy RV</h1>

        <h2>
          Python Full Stack Developer | UI/UX Designer
        </h2>

        <p>
          Aspiring Python Full Stack Developer and UI/UX Designer passionate about creating modern, responsive, and user-friendly web applications.
          Skilled in Python, Django, React, HTML, CSS, JavaScript, and UI/UX design with hands-on experience in frontend and backend development.
        </p>

        <div className="home-buttons">

          <a href="/My_Portfolio_Website/#projects">
            <button>View My Work</button>
          </a>

          <a href="/My_Portfolio_Website/#contact">
            <button>Contact Me</button>
          </a>
        </div>

      </div>


      <div className="home-right">

        <img
          src={profile}
          alt="profile"
        />

      </div>

    </section>

  );
}

export default Home;