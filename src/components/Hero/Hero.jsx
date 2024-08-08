import React, { useEffect } from 'react'
import Tags from '../Tags/Tags'
import './Hero.css'
import bg from "../../assets/Image.png"

function Hero({ p }) {

    // for changing the hero blog
    // useEffect(()=>{

    // },[p])

    const DataBox = ({ data }) => {
        return (
            <div className="data-box">
                <Tags tags={data.tags} />
                <h1>{data.title}</h1>
                <div className="pos-info">
                    <div className="author">
                        <img src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc" alt="" />
                        <span>{data.authorId}</span>
                    </div>
                    <p>{data.createdAt}</p>
                </div>
            </div>
        );
    }

    return (
        <section className='Hero'>
            <div className="hero-container">
                <div className="bg-img">
                    <img src={p[1].img || bg} alt="" />
                </div>
                <DataBox data={p[1]} />
            </div>
        </section>
    )
}

export default Hero