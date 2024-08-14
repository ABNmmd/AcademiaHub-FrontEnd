import React from 'react'

import DataBox from '../../components/DataBox/DataBox'

import './Posts.css'

function Posts() {
  return (
    <main>
        <section className="post">
            <DataBox data={null} />
        </section>
        <section className="comments">

        </section>
        <section className="related-posts">

        </section>
    </main>
  )
}

export default Posts