import React from 'react'

import { SlLike, SlDislike, SlBubble } from "react-icons/sl";

import './PostInteraction.css'

function PostInteraction() {
    return (
        <div>
            <div className="di-like">
                <button onClick={handleLike}><SlLike /></button>
                <button onClick={handleDiLike}><SlDislike /></button>
            </div>
            <div className="com">
                <button onClick={h}><SlBubble /></button>
            </div>
        </div>
    )
}

export default PostInteraction