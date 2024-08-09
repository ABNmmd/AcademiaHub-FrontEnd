import React from 'react'

import PostListing from '../PostListing/PostListing'

import './PostLayout.css'


function PostLayout({ p }) {

  return (
    <section className="post-layout">
        <h2>Latest Post</h2>
        <PostListing p={p} />
        <div className='downBtn'>
            <a href="/blog" className="btn">View All Post</a>
        </div>
    </section>
  )
}

export default PostLayout