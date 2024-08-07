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
                        <img src="" alt="" />
                        <span>{data.authorId}</span>
                    </div>
                    <p>{data.createdAt}</p>
                </div>
            </div>
        );
    }

    return (
        <section className='Hero'>
            <div className="bg-img">
                <img src={bg} alt="" />
            </div>
            <DataBox data={p[1]} />
        </section>
    )
}

export default Hero