import React from 'react'

import DataBox from '../DataBox/DataBox'

import './PostLayout.css'

import bg from "../../assets/Image.png"

function PostLayout({ p }) {

  return (
    <section className="post-layout">
        <h2>Latest Post</h2>
        
        <div className='downBtn'>
            <a href="/blog" className="btn">View All Post</a>
        </div>
    </section>
  )
}

export default PostLayout