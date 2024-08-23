import React, { useContext } from 'react'
import { PostsContext } from '../../contexts/PostsContext';
import { useParams } from 'react-router-dom';

import { SlLike, SlDislike, SlBubble, SlOptionsVertical } from "react-icons/sl";

import './PostInteraction.css'

function PostInteraction({ likes, dislikes }) {
    const { postId } = useParams();
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
                <div className="x">
                    <SlOptionsVertical />
                    <ul>
                        <li><a href={`edit/${postId}`}>Edit</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PostInteraction