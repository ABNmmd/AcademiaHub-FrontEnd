import React from 'react'

import DataBox from '../DataBox/DataBox'

import './PostLayout.css'

import bg from "../../assets/Image.png"

function PostLayout({ p }) {

  return (
    <section className="post-layout">
        <h2>Latest Post</h2>
        <div className="post-container">
            {
                p.map((post, index) => (
                    <div key={index} className="post-box">
                        <div className="image">
                            <img src={bg} alt="" />
                        </div>
                        <DataBox data={post} h1Class={"h1-posts"} />
                    </div>
                ))
            }
        </div>
        <div>
            <a href="/blog" className="btn">View All Post</a>
        </div>
    </section>
  )
}

export default PostLayout