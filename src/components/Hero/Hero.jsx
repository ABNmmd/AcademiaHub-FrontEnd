import React, { useEffect } from 'react'
import './Hero.css'

function Hero({ p, }) {

    // for changing the hero blog
    // useEffect(()=>{

    // },[p])

    const dataBox = ({data}) => {
        return (
            <div className="data-box">
                <ul className="tags">
                    {data.tags.map((tag, i) => (
                        <li key={i}>
                            <a href="">{tag}</a>
                        </li>
                    ))}
                </ul>
                <h1>data.title</h1>
            </div>
        );
    }

    return (
        <section className='Hero'>
            <div className="bg-img"></div>
            <dataBox data={p[1]} />
        </section>
    )
}

export default Hero