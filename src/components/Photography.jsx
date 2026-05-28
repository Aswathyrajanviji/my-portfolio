import React from 'react';
import './Photography.css';
import p1 from '../images/krishnapuram.jpg';
import p2 from '../images/kowdiar.jpg';
import p3 from '../images/kuthiramalika.jpg';

function Photography() {
  return (

    <section id="photography" className="photography">

      <h1>Photography</h1>

      <div className="photo-container">

        <div className="photo-card">

          <img
            src={p1}
            alt="nature"
          />

        </div>


        <div className="photo-card">

          <img
            src={p2}
            alt="travel"
          />

        </div>


        <div className="photo-card">

          <img
            src={p3}
            alt="street"
          />

        </div>


        {/* <div className="photo-card">

          <img
            src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee"
            alt="photo"
          />

        </div> */}

      </div>

    </section>
  );
}

export default Photography;