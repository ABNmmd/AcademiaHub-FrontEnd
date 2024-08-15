import React from 'react'
import { PostsContext } from '../../contexts/PostsContext';

import { SlLike, SlDislike, SlBubble } from "react-icons/sl";

import './PostInteraction.css'

function PostInteraction({ showComment, setShowComment }) {
    const handleLike = () => {

    };
    const handleDiLike = () => {

    };
    const handleCommentClick = () => {

    };

    return (
        <div>
            <div className="di-like">
                <button onClick={handleLike}><SlLike /></button>
                <button onClick={handleDiLike}><SlDislike /></button>
            </div>
            <div className="com">
                <button onClick={handleCommentClick}><SlBubble /></button>
            </div>
        </div>
    )
}

export default PostInteraction