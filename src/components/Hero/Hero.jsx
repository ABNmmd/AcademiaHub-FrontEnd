import React, { useEffect } from 'react'
import DataBox from '../DataBox/DataBox'
import './Hero.css'
import bg from "../../assets/Image.png"

function Hero({ p }) {

    // for changing the hero blog
    // useEffect(()=>{

    // },[p])


    return (
        <section className='Hero'>
            <div className="hero-container">
                <div className="bg-img">
                    <img src={bg} alt="" />
                </div>
                <DataBox data={p} h1Class={null} />
            </div>
        </section>
    )
}

export default Hero