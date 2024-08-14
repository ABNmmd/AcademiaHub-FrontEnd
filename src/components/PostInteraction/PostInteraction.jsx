import React from 'react'

import { SlLike, SlDislike } from "react-icons/sl";

import './PostInteraction.css'

function PostInteraction() {
    return (
        <div>
            <div className="di-like">
                <button><SlLike /></button>
                <button><SlDislike /></button>
            </div>
            <div className="com">

            </div>
        </div>
    )
}

export default PostInteraction