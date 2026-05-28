import React from 'react';
import './Contactme.css';

function Contactme() {
  return (

    <section id="contact" className="contact-section">

      <h1>Contact Me</h1>

      <div className="contact-container">

        <div className="contact-left">

          {/* <h2>Let's Work Together</h2> */}

          <p>Email : aswathyrv337@gmail.com</p>
          <p>Phone : +91 9645990699</p>
          <p>Location : Aswathy Bhavan,Attingal,Tvm,Kerala, India</p>

        </div>


        <div className="contact-right">

          <form>

            <input
              type="text"
              placeholder="Your Name"
            />

            <input
              type="email"
              placeholder="Your Email"
            />

            <textarea
              placeholder="Your Message"
            ></textarea>

            <button>Send Message</button>

          </form>

        </div>

      </div>

    </section>
  );
}

export default Contactme;