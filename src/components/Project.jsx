import React from 'react';
import './Project.css';

import project1 from '../images/project1.jpg';
import project2 from '../images/project2.jpg';
import project3 from '../images/project3.jpg';

function Project() {

  return (

    <section id="projects" className="projects">

      <h1>My Projects</h1>

      <div className="project-container">


        {/* Palace Project */}

        <div className="project-card">

          <img
            src={project1}
            alt="project"
          />

          <h2> History Behind Palaces</h2>

          <p>


            A project based on Kerala palaces that presents historical beauty, traditional architecture, and cultural heritage through photography.
          </p>

          <a href="/My_Portfolio_Website/palace-project">

            <button>
              View Project
            </button>

          </a>

        </div>



        {/* Blog Project */}

        <div className="project-card">

          <img
            src={project2}
            alt="project"
          />

          <h2>Lifestream Blog </h2>

          <p>
            Lifestream Blog Application

            A blog application that allows users to create, manage, and explore articles with a simple and user-friendly design.
          </p>

          <a href="/My_Portfolio_Website/blog-project">

            <button>
              View Project
            </button>

          </a>

        </div>



        {/* UIUX Project */}

        <div className="project-card">

          <img
            src={project3}
            alt="project"
          />

          <h2>News Mobile App</h2>

          <p>
            A modern and user-friendly mobile news application UI/UX design created using Figma for browsing categories,articles with a clean and interactive interface.
          </p>

          <a href="/My_Portfolio_Website/uiux-project">

            <button>
              View Project
            </button>

          </a>

        </div>

      </div>

    </section>

  );
}

export default Project;