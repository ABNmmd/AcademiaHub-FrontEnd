import React from 'react'

import './Comments.css'

function Comments({ postId, showComment }) {
    const comments = [];

    return (
        <section className="comments">
            <div className="comments-container">
                <div className="comment-edit-box">
                    <div className="user">
                        <img src="" alt="" />
                        <span>Jhon Doe</span>
                    </div>
                    <div className="cont">
                        <input type="text" />
                    </div>
                </div>
                {
                    showComment &&
                    comments.map((com, index) => (
                        <div className="comment-box" key={index}>
                            <div className="user">
                                <img src="" alt="" />
                                <span>Jhon Doe</span>
                            </div>
                            <div className="cont">
                                <span className='time'></span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className="inter"></div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Comments