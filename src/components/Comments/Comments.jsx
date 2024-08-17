import React from 'react'

import './Comments.css'
import prf from '../../assets/download.png'

function Comments({ postId, showComment }) {
    const comments = [];

    const handleResize = (event) => {
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
    };

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
                            <textarea type="text" placeholder='Add a comment' onInput={handleResize} />
                            {<div className="i-con">
                                <button type="reset">Cancel</button>
                                <button type="submit">Send</button>
                            </div>}
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