import React from 'react'

import { SlLike, SlDislike, SlBubble } from "react-icons/sl";

import './PostInteraction.css'

function PostInteraction({ showComment, setShowComment }) {
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