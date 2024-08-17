import React from 'react'

import './Comments.css'
import prf from '../../assets/download.png'

function Comments({ postId, showComment }) {
    const comments = [];

    return (
        <section className="comments">
            <div className="comments-container">
                <div className="head">
                    <h3>1033 comments</h3>
                </div>
                <div className='body'>
                    <div className="comment-edit-box">
                        <div className="user">
                            <img src={prf} alt="" />
                        </div>
                        <div className="cont">
                            <span>Jhon Doe</span>
                            <div className="i-con">
                                <input type="text" placeholder='Add a comment' />
                                <button type="reset"></button>
                                <button type="submit"></button>
                            </div>
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
            </div>
        </section>
    )
}

export default Comments