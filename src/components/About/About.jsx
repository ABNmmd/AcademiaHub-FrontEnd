import React from 'react'

import './About.css'

function About() {
    return (
        <section className="about-section">
            <h2>About AcademiaHub</h2>
            <p>
                Welcome to <strong>AcademiaHub</strong>—your go-to destination for diverse and insightful content that spans a range of interests. Whether you're looking for the latest trends in technology, tips on personal development, or just want to explore new hobbies, we've got something for everyone.
            </p>
            <p>
                Here at AcademiaHub, we believe that knowledge is meant to be shared, and that’s why we cover everything from <strong>Lifestyle</strong> and <strong>Travel</strong> to <strong>Business</strong> and <strong>Education</strong>. No matter what you're passionate about, you'll find content that inspires, informs, and entertains.
            </p>
            <p>
                Ready to join the conversation and unlock more features? <strong>Log in</strong> to personalize your experience, comment on posts, and connect with other members of the AcademiaHub community.
            </p>
            <a href="/login" className="login-btn">Log In</a>
        </section>
    )
}

export default About