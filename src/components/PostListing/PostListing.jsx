import React from 'react'

function PostListing() {
    return (
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
    )
}

export default PostListing