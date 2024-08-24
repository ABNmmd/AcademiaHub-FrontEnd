import React, { useContext } from 'react'
import { UserContext } from '../../contexts/UserContext';
import { PostsContext } from '../../contexts/PostsContext';
import { useNavigate, useParams } from 'react-router-dom';

import { SlLike, SlDislike, SlBubble, SlOptionsVertical } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import './PostInteraction.css'

function PostInteraction({ likes, dislikes }) {
    const { postId } = useParams();
    const { deleteExistingPost } = useContext(PostsContext);
    const { isAuth, user } = useContext(UserContext);
    const navigate = useNavigate();

    const handleLike = async () => {

    };
    const handleDiLike = async () => {

    };
    const handleCommentClick = () => {

    };

    const handlePostDelete = async () => {
        try {
            if (!isAuth) return;
            await deleteExistingPost(postId);
            navigate('/');
        } catch (error) {
            alert('Failed to delete the post. Please try again.');
        }
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
                {isAuth && (user._id == postId) &&
                    <div className="x">
                        <SlOptionsVertical />
                        <ul>
                            <li><a href={`edit/${postId}`}><CiEdit />Edit</a></li>
                            <li><button onClick={handlePostDelete}><MdDelete />Delete</button></li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default PostInteraction