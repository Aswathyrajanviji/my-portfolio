import React from 'react';

import ui11 from '../images/ui11.png';
import ui22 from '../images/ui22.png';
import ui33 from '../images/ui33.png';
import ui44 from '../images/ui44.png';
// import ui55 from '../images/ui55.png';

import report from '../pdfs/uiux-report.pdf';

function UiuxProject() {

    return (

        <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '100px 10%',
            background: '#0f172a',
            color: 'white'
        }}>

            {/* INTRODUCTION HEADING */}

            <h1 style={{
                fontSize: '55px',
                marginBottom: '40px',
                textAlign: 'center',
                textDecoration: 'underline',
                textUnderlineOffset: '12px',
                textDecorationThickness: '3px'
            }}>
                NEWS APP
            </h1>

            {/* INTRODUCTION TEXT */}

            <p style={{
                fontSize: '22px',
                lineHeight: '42px',
                color: '#d1d5db',
                marginBottom: '70px',
                textAlign: 'justify'
            }}>
                This project presents a modern UI/UX mobile application
                design created using Figma for a news-based platform.
                The application is designed to provide users with a
                smooth and interactive experience for browsing daily
                news, categories, trending updates, and notifications.
                The design focuses on clean layouts, easy navigation,
                modern visual elements, and user-friendly interfaces.
                Different mobile screens were created to improve user
                engagement and provide a better digital news experience.
                This project also highlights creativity, modern design
                thinking, and mobile application prototyping skills.
            </p>

            {/* IMAGES */}

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '30px',
                flexWrap: 'wrap',
                marginBottom: '80px'
            }}>

                <img
                    src={ui11}
                    alt=""
                    style={{
                        width: '260px',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />

                <img
                    src={ui22}
                    alt=""
                    style={{
                        width: '260px',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />

                <img
                    src={ui33}
                    alt=""
                    style={{
                        width: '260px',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />

                <img
                    src={ui44}
                    alt=""
                    style={{
                        width: '260px',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />

                {/* <img
                    src={ui55}
                    alt=""
                    style={{
                        width: '260px',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                /> */}

            </div>

            {/* FEATURES HEADING */}

            <h2 style={{
                fontSize: '40px',
                marginBottom: '30px',
                textDecoration: 'underline',
                textUnderlineOffset: '10px',
                textDecorationThickness: '3px'
            }}>
                FEATURES
            </h2>

            {/* FEATURES */}

            <ul style={{
                fontSize: '22px',
                lineHeight: '45px',
                marginBottom: '50px',
                color: '#d1d5db'
            }}>

                <li>user-friendly mobile application interface.</li>
                <li>Interactive screens for categories, trending news, and updates.</li>
                <li>Responsive mobile UI screens created using Figma.</li>
                <li>Easy navigation system for better user interaction.</li>
                <li>Focused on improving user experience and accessibility.</li>
                <li>News notification and article browsing interface design.</li>
                <li>Designed with modern mobile application prototyping concepts.</li> </ul>

            {/* PDF BUTTON */}

            <a
                href={report}
                target="_blank"
                rel="noreferrer"
            >

                <button style={{
                    padding: '15px 35px',
                    border: 'none',
                    background: '#ec4899',
                    color: 'white',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontSize: '18px'
                }}>

                    Open PDF Report

                </button>

            </a>

        </div>

    );
}

export default UiuxProject;