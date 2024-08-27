import React, { useContext, useState } from 'react'
import { UserContext } from '../../contexts/UserContext';
import { PostsContext } from '../../contexts/PostsContext';
import { useNavigate, useParams } from 'react-router-dom';

import { SlLike, SlDislike, SlBubble, SlOptionsVertical } from "react-icons/sl";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import './PostInteraction.css'

function PostInteraction({ autherId, likes: initialLikes, dislikes: initialDislikes }) {
    const { postId } = useParams();
    const { deleteExistingPost, likePostAction, dislikePostAction } = useContext(PostsContext);
    const { isAuth, user } = useContext(UserContext);
    const navigate = useNavigate();
    const [error, setError] = useState('');

    const [localLikes, setLocalLikes] = useState(initialLikes || []);
    const [localDislikes, setLocalDislikes] = useState(initialDislikes || []);;

    const handleLike = async () => {
        try {
            if (!isAuth) {
                setError('Please Login.');
                return;
            }
            await likePostAction(postId);
            if (!likes.includes(user?._id)) {
                setLikes((prevLikes) => [...prevLikes, user?._id]);
                setDislikes((prevDislikes) => prevDislikes.filter((id) => id !== user?._id)); // Remove from dislikes if it exists
            }
            setError('');
        } catch (error) {
            setError('Failed to like the post. Please try again.');
        }
    };

    const handleDislike = async () => {
        try {
            if (!isAuth) {
                setError('Please Login.');
                return;
            }
            await dislikePostAction(postId);
            if (!dislikes.includes(user?._id)) {
                setDislikes((prevDislikes) => [...prevDislikes, user?._id]);
                setLikes((prevLikes) => prevLikes.filter((id) => id !== user?._id)); // Remove from likes if it exists
            }
            setError('');
        } catch (error) {
            setError('Failed to dislike the post. Please try again.');
        }
    };

    const handlePostDelete = async () => {
        try {
            if (!isAuth) {
                setError('Please Login.');
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
            {error && <p className='error'>{error}</p>}
        </>
    )
}

export default PostInteraction