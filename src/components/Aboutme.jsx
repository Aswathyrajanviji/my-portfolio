import React from 'react';
import './Aboutme.css';
import aboutt from '../images/s.jpg';

function About() {
  return (

    <section id="about" className="about">

      <div className="about-left">

        <img
          src={aboutt}
          alt="about"
        />

      </div>

      <div className="about-right">

        <h1>About Me</h1>

        <p>


          I'm Aswathy R V, a passionate Python Full Stack Developer and UI/UX Designer with a strong interest in building modern, responsive, and user-friendly web applications.
          I enjoy transforming creative ideas into meaningful digital experiences through clean design and efficient development.
          I completed my BSc in Computer Science and Diploma in Photojournalism, and I am currently pursuing MSc Computer Science.
          Along with academics, I completed professional training in Python Full Stack Development and UI/UX Design at Networkz Systems.
          I have hands-on experience in Python, Django, React, HTML, CSS, JavaScript, PHP, MySQL, Figma, and Canva.
          I love working on frontend and backend technologies, designing attractive interfaces, and developing projects that improve my technical and creative skills.
          Apart from coding and design, photography is my creative passion.
          I always enjoy exploring new technologies, learning modern development trends, and creating innovative digital solutions.
        </p>

        <div className="about-cards">

          <div className="card">
            <h3>BSc Computer Science</h3>
          </div>

          <div className="card">
            <h3>Diploma in Photojournalism</h3>
          </div>

          <div className="card">
            <h3>Python Full Stack & UiUx Design </h3>
          </div>
          <div className="card">
            <h3>MSc Computer Science </h3>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;