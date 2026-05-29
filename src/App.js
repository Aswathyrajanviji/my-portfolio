import React from 'react';

import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/Aboutme';
import Skill from './components/Skill';
import Project from './components/Project';
import Uiux from './components/Uiux';
import Photography from './components/Photography';
import Resume from './components/Resume';
import Contactme from './components/Contactme';
import Footer from './components/Footer';

import PalaceProject from './components/PalaceProject';
import BlogProject from './components/BlogProject';
import UiuxProject from './components/UiuxProject';

function App() {

  return (

    <BrowserRouter >

      <Routes>
        {/* Home Page */}

        <Route
          path="/"
          element={
            <>

              <Navbar />
              <Home />
              <About />
              <Skill />
              <Project />
              <Uiux />
              <Photography />
              <Resume />
              <Contactme />
              <Footer />

            </>
          }
        />



        {/* Palace Project */}

        <Route
          path="/palace-project"
          element={<PalaceProject />}
        />



        {/* Blog Project */}

        <Route
          path="/blog-project"
          element={<BlogProject />}
        />



        {/* UIUX Project */}

        <Route
          path="/uiux-project"
          element={<UiuxProject />}
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;