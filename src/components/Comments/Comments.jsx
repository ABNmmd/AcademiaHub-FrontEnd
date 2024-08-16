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
                    </div>
                    <div className="cont">
                        <span>Jhon Doe</span>
                        <input type="text" placeholder='Add a comment' />
                    </div>
                    <div className="send-btn">
                        <button type="submit"></button>
                    </div>
                </div>
                {
                    showComment &&
                    comments.map((com, index) => (
                        <div className="comment-box" key={index}>
                            <div className="user">
                                <img src="" alt="" />
                            </div>
                            <div className="cont">
                                <span>Jhon Doe</span><span className='time'>2 days ago</span>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                <div className="inter"></div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </section>
    )
}

export default Comments