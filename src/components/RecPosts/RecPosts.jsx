import React from 'react'
import Slider from "react-slick";

import './RecPosts.css'

function RecPosts() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {
                    
                }
            </Slider>
        </div>
    )
}

export default RecPosts