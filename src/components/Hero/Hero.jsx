import React from 'react'
import './Hero.css'

function Hero({ p, }) {
  return (
    <section className='Hero'>
        <div className="bg-img"></div>
        {p.map((item, index) => (
          <div className="data-box">

          </div>
        ))}
      </section>
  )
}

export default Hero