import React from 'react';
import './Resume.css';
import report from '../pdfs/ASWATHY RV.pdf';

function Resume() {
  return (

    <section id="resume" className="resume-section">

      <div className="resume-left">

        <div className="resume-icon">
          📄
        </div>

        <div>
          <h2>Resume</h2>

          <p>
            View my resume details.
          </p>


          <a
            href={report}
            target="_blank"
            rel="noreferrer"
          >

            <button style={{
              padding: '15px 30px',
              border: 'none',
              background: '#ec4899',
              color: 'white',
              borderRadius: '10px',
              cursor: 'pointer'
            }}>

              View

            </button>

          </a>
        </div>

      </div>


      <div className="timeline">

        <div className="timeline-item">
          <span>2020</span>
          <p>Started journey in Service Center</p>
        </div>

        <div className="timeline-item">
          <span>2022</span>
          <p>BSc Computer Science Completed</p>
        </div>

        <div className="timeline-item">
          <span>2023</span>
          <p>Diploma in Photojournalism</p>
        </div>

        <div className="timeline-item">
          <span>2024</span>
          <p> Python full stack &UI/UX </p>
        </div>
        <div className="timeline-item">
          <span>2026</span>
          <p> Msc Computer Science </p>
        </div>

      </div>

    </section>
  );
}

export default Resume;