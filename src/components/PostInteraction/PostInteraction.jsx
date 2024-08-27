import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext';
import { PostsContext } from '../../contexts/PostsContext';
import { useNavigate, useParams } from 'react-router-dom';

import { SlLike, SlDislike, SlBubble, SlOptionsVertical } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import './PostInteraction.css'

function PostInteraction({ autherId, likes, dislikes }) {
    const { postId } = useParams();
    const { deleteExistingPost, likePostAction, dislikePostAction } = useContext(PostsContext);
    const { isAuth, user } = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const handleLike = async () => {
        try {
            if (!isAuth) return;
            await likePostAction(postId);
            setError('');
        } catch (error) {
            setError('Failed to like the post. Please try again.');
        }
    };

    const handleDislike = async () => {
        try {
            if (!isAuth) {
                setError('Please Login and try again');
                return;
            }
            await dislikePostAction(postId);
            setError('');
        } catch (error) {
            setError('Failed to dislike the post. Please try again.');
        }
    };

    const handlePostDelete = async () => {
        try {
            if (!isAuth) {
                setError('Please Login and try again');
                return;
            }
            await deleteExistingPost(postId);
            navigate('/');
        } catch (error) {
            alert('Failed to delete the post. Please try again.');
        }
    };

    return (
        <>
            <div className='interactions'>
                <div className="di-like">
                    <button className={dislikes?.includes(user?._id) && 'activeAction'} onClick={handleLike}>
                        <span>{likes?.length}</span>
                        <SlLike />
                    </button>
                    <button className={dislikes?.includes(user?._id) && 'activeAction'} onClick={handleDislike}>
                        <span>{dislikes?.length}</span>
                        <SlDislike />
                    </button>
                </div>
                <div className="com">
                    <button>
                        <a href="#comments">
                            <SlBubble />
                        </a>
                    </button>
                    {isAuth && (user?._id == autherId?._id) &&
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
            {error && <p className='error'>{error}this is error</p>}
        </>
    )
}

export default PostInteraction