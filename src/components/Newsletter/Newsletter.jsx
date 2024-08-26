import React, { useState } from 'react'

import { CiMail } from "react-icons/ci";

import './Newsletter.css'

function Newsletter() {
    const [email, setEmail] = useState('');
    
    return (
        <section id='newsletter' className='newsletter'>
            <div className="form-container">
                <div className='headline'>
                    <h2>Weekly Newsletter</h2>
                    <p>Get blog articles and offers via email</p>
                </div>
                <form action=''>
                    <div>
                        <input type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
                        <CiMail />
                    </div>
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter