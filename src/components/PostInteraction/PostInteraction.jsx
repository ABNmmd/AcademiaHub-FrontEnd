import React, { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext';

import { SlLike, SlDislike, SlBubble } from "react-icons/sl";

import './PostInteraction.css'

function PostInteraction({ likes, dislikes }) {
    const { } = useContext(PostsContext);
    const handleLike = () => {

    };
    const handleDiLike = () => {

    };
    const handleCommentClick = () => {

    };

    return (
        <div className='interactions'>
            <div className="di-like">
                <button onClick={handleLike}>
                    <span>{likes}</span>
                    <SlLike />
                </button>
                <button onClick={handleDiLike}>
                    <span>{dislikes}</span>
                    <SlDislike />
                </button>
            </div>
            <div className="com">
                <button onClick={handleCommentClick}>
                    <SlBubble />
                </button>
            </div>
        </div>
    )
}

export default PostInteraction