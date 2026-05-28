import React from 'react';

import './Uiux.css';

import ui1 from '../images/ui1.png';
import ui2 from '../images/ui2.png';
import ui3 from '../images/ui3.png';
import ui4 from '../images/ui4.png';
import ui5 from '../images/ui5.png';

import dashboard from '../images/uiux1.png';

function UIUX() {

  return (

    <section id="uiux" className="uiux">

      <h1>UI/UX Showcase</h1>

      <div className="uiux-container">

        <img
          className="mobile-ui"
          src={ui1}
          alt=""
        />

        <img
          className="mobile-ui"
          src={ui2}
          alt=""
        />

        <img
          className="mobile-ui"
          src={ui3}
          alt=""
        />

        <img
          className="mobile-ui"
          src={ui4}
          alt=""
        />

        <img
          className="mobile-ui"
          src={ui5}
          alt=""
        />

        <img
          className="dashboard-ui"
          src={dashboard}
          alt=""
        />

      </div>

    </section>

  );
}

export default UIUX;