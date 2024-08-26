import React, { useState } from 'react'

import { CiMail } from "react-icons/ci";

import './Newsletter.css'

function Newsletter() {
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        if (email.match(validRegex)) {
            setError(null);
            return true;
        } else {
            setError('Invalid Email address. Please Try again');
            return false;
        }
    };

    return (
        <section id='newsletter' className='newsletter'>
            <div className="form-container">
                <div className='headline'>
                    <h2>Weekly Newsletter</h2>
                    <p>Get blog articles and offers via email</p>
                </div>
                <form action='https://docs.google.com/forms/d/e/1FAIpQLSd6SxISvurzL3y_GRD5fTnQaOG7_j2SXrsHvFx7xFXAXhK7Lw/formResponse' method="post" target="hidden_iframe" onSubmit={handleSubmit}>
                    <div>
                        <input type="email" name="entry.507768606" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        <CiMail />
                    </div>
                    {error && <p className='error'>{error}</p>}
                    <button type="submit">Subscribe</button>
                </form>
                <iframe name="hidden_iframe" id="hidden_iframe" style={{ display: 'none' }}></iframe>
            </div>
        </section>
    )
}

export default Newsletter