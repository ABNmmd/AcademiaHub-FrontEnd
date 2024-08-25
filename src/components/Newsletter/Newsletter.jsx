import React from 'react'

import './Newsletter.css'

function Newsletter() {
    return (
        <section id='newsletter'>
            <div className="form-container">
                <div className='headline'>
                    <h2>Weekly Newsletter</h2>
                    <p>Get blog articles and offers via email</p>
                </div>
                <form>
                    <input type="text" />
                    <button type="submit">Subscribe</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter