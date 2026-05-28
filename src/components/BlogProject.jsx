import React from 'react';

import blog1 from '../images/blog1.jpg';
import blog2 from '../images/blog2.jpg';
import blog3 from '../images/blog3.jpg';
import blog4 from '../images/blog4.jpg';
import blog5 from '../images/blog5.jpg';

import report from '../pdfs/blog-report.pdf';

function BlogProject() {

    return (

        <div style={{
            width: '100%',
            minHeight: '100vh',
            padding: '100px 10%',
            background: '#111827',
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
                LIFESTREAM BLOG APPLICATION
            </h1>

            {/* INTRODUCTION TEXT */}

            <p style={{
                fontSize: '22px',
                lineHeight: '42px',
                color: '#d1d5db',
                marginBottom: '70px',
                textAlign: 'justify'
            }}>
                The Lifestream Blog Application is a platform designed to allow users
                to create, manage, and view articles. Users can easily add, edit,
                and delete their articles, providing a dynamic space for content
                creation. The application aims to offer a simple and user-friendly
                experience for article management and browsing, focusing on providing
                a space for personal and informative content creation. By focusing
                on a personalized approach to article management, the platform
                enables users to build a repository of meaningful content for
                sharing and engagement.
            </p>

            {/* IMAGES */}

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '40px',
                marginBottom: '80px'
            }}>

                <img
                    src={blog1}
                    alt=""
                    style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />

                <img
                    src={blog2}
                    alt=""
                    style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />

                <img
                    src={blog3}
                    alt=""
                    style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />

                <img
                    src={blog4}
                    alt=""
                    style={{
                        width: '100%',
                        height: '350px',
                        objectFit: 'cover',
                        borderRadius: '20px',
                        boxShadow: '0px 4px 15px rgba(0,0,0,0.3)'
                    }}
                />


            </div>

            {/* FEATURES HEADING */}

            <h2 style={{
                fontSize: '38px',
                marginBottom: '30px',
                textDecoration: 'underline',
                textUnderlineOffset: '10px'
            }}>
                Features
            </h2>

            {/* FEATURES */}

            <ul style={{
                fontSize: '22px',
                lineHeight: '45px',
                marginBottom: '50px',
                color: '#d1d5db'
            }}>
                <li>Users can create and publish articles.</li>

                <li>The application allows users to edit and delete articles anytime.</li>

                <li>The platform provides a simple and user-friendly interface for article management.</li>

                <li>The application focuses on personal and informative content creation.</li>
            </ul>

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

export default BlogProject;