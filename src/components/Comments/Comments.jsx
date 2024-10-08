import React, { useContext, useEffect, useRef, useState } from 'react'
import moment from "moment";
import { CommentsContext } from '../../contexts/CommentContext';
import { UserContext } from '../../contexts/UserContext';

import './Comments.css'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdMoreVert, MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import prf from '../../assets/download.png'

function Comments({ postId }) {
    const { user, isAuth } = useContext(UserContext);
    const { createNewComment, getAllComments, updateOldComment, deleteExistingComment, likeCommentAction, dislikeCommentAction } = useContext(CommentsContext);
    // const commentsFake = [
    //     {
    //         authorId: 'Jhon Doe2',
    //         content: 'very good',
    //         likes: [1, 2, 3, 1],
    //         dislikes: [1, 2],
    //         createdAt: '12/10/2024'
    //     },
    //     {
    //         authorId: 'Jhon Doe3',
    //         content: 'Great.. ^_^',
    //         likes: [1, 2, 1],
    //         dislikes: [1, 2, 5, 6, 8, 7],
    //         createdAt: '12/10/2024'
    //     },
    //     {
    //         authorId: 'Jhon Doe3',
    //         content: 'Great.. ^_^',
    //         likes: [1, 2, 1],
    //         dislikes: [1, 2, 5, 6, 8, 7],
    //         createdAt: '12/10/2024'
    //     },
    //     {
    //         authorId: 'Jhon Doe3',
    //         content: 'Great.. ^_^',
    //         likes: [1, 2, 1],
    //         dislikes: [1, 2, 5, 6, 8, 7],
    //         createdAt: '12/10/2024'
    //     },
    //     {
    //         authorId: 'Jhon Doe3',
    //         content: 'Great.. ^_^',
    //         likes: [1, 2, 1],
    //         dislikes: [1, 2, 5, 6, 8, 7],
    //         createdAt: '12/10/2024'
    //     },
    //     {
    //         authorId: 'Jhon Doe3',
    //         content: 'Great.. ^_^',
    //         likes: [1, 2, 1],
    //         dislikes: [1, 2, 5, 6, 8, 7],
    //         createdAt: '12/10/2024'
    //     },
    // ];
    const [comments, setComments] = useState([]);
    const [editMode, setEditMode] = useState(null);
    const [error, setError] = useState(null); // to handle error whene submitting comment
    const [delError, setDelError] = useState(null); // to handle error whene deletting comment
    const [intError, setIntError] = useState(null); // to handle error whene interacting withe comment

    useEffect(() => {
        const getCom = async (postId) => {
            try {
                const commentsData = await getAllComments(postId);
                console.log('comments : ', commentsData);
                setComments(commentsData);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        }
        getCom(postId);
    }, [postId]);

    const [activeBtn, setActiveBtn] = useState(false);
    const textareaRef = useRef(null);
    const editTextareaRef = useRef(null);

    const handleInputChange = () => {
        if (textareaRef.current.value) {
            setActiveBtn(true);
        } else {
            setActiveBtn(false);
        }
    };
    const handleEditInputChange = () => {
        if (editTextareaRef.current.value) {
            setActiveBtn(true);
        } else {
            setActiveBtn(false);
        }
    };

    const handleCancel = () => {
        textareaRef.current.value = '';
        setActiveBtn(false);
    };

    const handleEditClick = (id) => {
        setEditMode(id); // Enable edit mode for the specific comment
    };

    const handleEditCancel = () => {
        editTextareaRef.current.value = '';
        setEditMode(null); // Exit edit mode
    };

    // resizing the textarea
    const handleResize = (event) => {
        event.target.style.height = event.target.scrollHeight + 'px';
        if (event.current.value == '') {
            event.target.style.height = '1.2em';
        }
    };

    // comment creation
    const handleCommentSub = async () => {
        const content = textareaRef.current.value;
        try {
            if (!isAuth) {
                setError('Unautorized. Please login first');
                return
            }

            if (!content || content == ' ') {
                setError('Invalid content. Please try again');
                return
            }
            const newCom = await createNewComment({ content, postId });
            handleCancel();
            setComments([...comments, newCom]);
            setError(null);
        } catch (error) {
            setError('Failed to submit comment. Please try again.');
        }
    };

    //Comment delete
    const handleCommentDel = async (id) => {
        try {
            await deleteExistingComment(id);
            setDelError(null);
            setComments(comments.filter(com => com._id !== id));
            // console.log('after delete comment ', id, comments);
        } catch (error) {
            setDelError('Failed to delete the comment. Please try again.');
        }
    };

    // Comment Update
    const handleCommentUpdate = async (id) => {
        const content = editTextareaRef.current.value;
        try {
            if (!content || content.trim() === '') {
                setError('Invalid content. Please try again.');
                return;
            }
            const updatedComment = await updateOldComment(id, { content });
            setComments(comments.map(com => (com._id === id ? updatedComment : com)));
            console.log(updatedComment);
            setEditMode(null); // Exit edit mode after update
        } catch (error) {
            setError('Failed to update comment. Please try again.');
        }
    };

    // Like a comment
    const handleLike = async (id) => {
        try {
            if (!isAuth) {
                setIntError('Please login to interact');
                return;
            }

            const updatedComment = await likeCommentAction(id);
            setComments(comments.map(com => (com._id === id ? updatedComment : com)));
        } catch (error) {
            setIntError('Failed to like the comment. Please try again.');
        }
    };

    // Dislike a comment
    const handleDislike = async (id) => {
        try {
            if (!isAuth) {
                setIntError('Please login to interact');
                return;
            }

            const updatedComment = await dislikeCommentAction(id);
            setComments(comments.map(com => (com._id === id ? updatedComment : com)));
        } catch (error) {
            setIntError('Failed to dislike the comment. Please try again.');
        }
    };

    //pagenation
    const [currentPage, setCurrentPage] = useState(1);
    const commentsPerPage = 2;
    const [currentComments, setCurrentComments] = useState([]);

    const handleShowMore = () => {
        setCurrentPage(currentPage + 1);
    };
    const handleShowLess = () => {
        setCurrentPage(1);
    };

    useEffect(() => {
        if (comments && comments.length > 0) {
            const newComments = comments.slice(0, currentPage * commentsPerPage);
            setCurrentComments(newComments);
        } else {
            setCurrentComments([]);
        }
    }, [currentPage, comments]);


    return (
        <section className="comments" id='comments'>
            <div className="comments-container">
                <div className="head">
                    <h3>{comments && comments.length || 0} comments</h3>
                </div>
                <div className='body'>
                    <div className="comment-edit-box">
                        <div className="user">
                            <img src={user?.profilePicture?.imageUrl || prf} alt="" />
                        </div>
                        <div className="cont">
                            <textarea ref={textareaRef} type="text" placeholder='Add a comment' onChange={handleInputChange} onInput={handleResize} />
                            {isAuth ?
                                (activeBtn && <div className={`i-con ${activeBtn ? 'active' : null}`}>
                                    {error && <p style={{ color: 'red', fontSize: '13px', }}>{error}</p>}
                                    <div>
                                        <button type="reset" onClick={handleCancel}>Cancel</button>
                                        <button type="submit" onClick={handleCommentSub}>Send</button>
                                    </div>
                                </div>)
                                :
                                (<div className={`i-con active`}>
                                    <div>
                                        <a href="/login">Login</a>
                                        <a href="/register">Register</a>
                                    </div>
                                </div>)
                            }
                        </div>
                    </div>
                    {comments && comments.length > 0 ?
                        <>
                            {currentComments.map((com, index) => (
                                <div className="comment-box" key={index}>
                                    <div className="user">
                                        <img src={com?.authorId?.profilePicture?.imageUrl || prf} alt="" />
                                    </div>
                                    {editMode === com?._id ?
                                        (
                                            <div className="cont">
                                                <span>{com?.authorId?.username}</span><span className='time'>Last update: {moment(com?.updatedAt).fromNow()}</span>
                                                <textarea
                                                    ref={editTextareaRef}
                                                    defaultValue={com.content} // Display current comment content in textarea
                                                    onChange={handleEditInputChange}
                                                    onInput={handleResize}
                                                />
                                                <div className={`i-con ${activeBtn ? 'active' : null}`}>
                                                    <div>
                                                        <button type="reset" onClick={handleEditCancel}>Cancel</button>
                                                        <button type="submit" onClick={() => handleCommentUpdate(com?._id)}>Update</button>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                        :
                                        (
                                            <div className="cont">
                                                <span><a href={`/profile/${com?.authorId?._id}`}>{com?.authorId?.username}</a></span><span className='time'>{moment(com?.createdAt).fromNow()}</span>
                                                <p>{com?.content}</p>
                                                {delError && <p>{delError}</p>}
                                                <div className="inter">
                                                <button
                                                    className={com?.likes?.includes(user?._id) ? 'interacted' : ''}
                                                    onClick={() => handleLike(com?._id)}
                                                >
                                                    <BiSolidLike /> {com?.likes?.length}
                                                </button>
                                                <button
                                                    className={com?.dislikes?.includes(user?._id) ? 'interacted' : ''}
                                                    onClick={() => handleDislike(com?._id)}
                                                >
                                                    <BiSolidDislike /> {com?.dislikes?.length}
                                                </button>
                                                    {com?.authorId?._id == user?._id &&
                                                        <div className='onerOptions'>
                                                            <i><MdMoreVert /></i>
                                                            <ul role="menu">
                                                                <li role="menuitem"><button onClick={() => handleEditClick(com?._id)}><CiEdit /> Edit</button></li>
                                                                <li role="menuitem"><button onClick={() => handleCommentDel(com?._id)}><MdDelete /> Delete</button></li>
                                                            </ul>
                                                        </div>
                                                    }
                                                    {intError && <p style={{ color: 'red', fontSize: '12px' }}>{intError}</p>}
                                                </div>
                                            </div>
                                        )}
                                </div>
                            ))}
                            {currentComments.length < comments.length
                                ? <div className="mor" onClick={handleShowMore}><button> Show More...</button></div>
                                : (currentComments.length > commentsPerPage && <div className="mor" onClick={handleShowLess}><button> Show Less...</button></div>)
                            }
                        </>
                        :
                        (<p>No comments...</p>)
                    }
                </div>
            </div>
        </section >
    )
}

export default Comments