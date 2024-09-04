import React from 'react'

import DataBox from '../DataBox/DataBox'

import './PostListing.css'

import bg from "../../assets/Image.png"

function PostListing({ p }) {
    return (
        <div className="post-container">
            {
                p.map((post, index) => (
                    <div key={index} className="post-box">
                        <div className="image">
                            <img src={post?.image?.imageUrl || bg} alt="" />
                        </div>
                        <DataBox data={post} h1Class={"h1-posts"} />
                    </div>
                ))
            }
        </div>
    )
}

export default PostListing