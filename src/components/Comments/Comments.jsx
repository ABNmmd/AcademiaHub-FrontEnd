import React, { useContext, useEffect, useRef, useState } from 'react'
import { CommentsContext } from '../../contexts/CommentContext';
import { UserContext } from '../../contexts/UserContext';

import './Comments.css'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdMoreVert, MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import prf from '../../assets/download.png'

function Comments({ postId }) {
    const { user } = useContext(UserContext);
    const { createNewComment, getAllComments, updateOldComment, deleteExistingComment } = useContext(CommentsContext);
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
    const [error, setError] = useState(null);
    const [delError, setDelError] = useState(null);

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

    const handleInputChange = () => {
        if (textareaRef.current.value) {
            setActiveBtn(true);
        } else {
            setActiveBtn(false);
        }
    };

    const handleCancel = () => {
        textareaRef.current.value = '';
        setActiveBtn(false);
    };

    const handleResize = (event) => {
        event.target.style.height = event.target.scrollHeight + 'px';
        if (textareaRef.current.value == '') {
            event.target.style.height = '1.2em';
        }
    };

    const handleCommentSub = async () => {
        const content = textareaRef.current.value;
        try {
            const newCom = await createNewComment({ content, postId });
            handleCancel();
            setComments([...comments, newCom]);
            setError(null);
        } catch (error) {
            setError('Failed to submit comment. Please try again.');
        }
    };

    const handleCommentDel = async (id) => {
        try {
            await deleteExistingComment(id);
            setComments(comments.filter(com => com.id !== id));
            setDelError(null);
        } catch (error) {
            setDelError('Failed to delete the comment. Please try again.');
        }
    };

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
        <section className="comments">
            <div className="comments-container">
                <div className="head">
                    <h3>{comments && comments.length || 0} comments</h3>
                </div>
                <div className='body'>
                    <div className="comment-edit-box">
                        <div className="user">
                            <img src={prf} alt="" />
                        </div>
                        <div className="cont">
                            <textarea ref={textareaRef} type="text" placeholder='Add a comment' onChange={handleInputChange} onInput={handleResize} />
                            {<div className={`i-con ${activeBtn ? 'active' : null}`}>
                                {error && <p style={{ color: 'red', fontSize: '13px', }}>{error}</p>}
                                <div>
                                    <button type="reset" onClick={handleCancel}>Cancel</button>
                                    <button type="submit" onClick={handleCommentSub}>Send</button>
                                </div>
                            </div>}
                        </div>
                    </div>
                    {comments && comments.length > 0 ?
                        <>
                            {currentComments.map((com, index) => (
                                <div className="comment-box" key={index}>
                                    <div className="user">
                                        <img src={prf} alt="" />
                                    </div>
                                    <div className="cont">
                                        <span>{com.authorId.username}</span><span className='time'>{com.createdAt}</span>
                                        <p>{com.content}</p>
                                        {delError && <p>{delError}</p>}
                                        <div className="inter">
                                            <button className={com.likes.includes(user ? user._id : null) ? 'interacted' : null}><BiSolidLike /> {com.likes.length}</button>
                                            <button className={com.dislikes.includes(user ? user._id : null) ? 'interacted' : null}><BiSolidDislike /> {com.dislikes.length}</button>
                                            {com.authorId._id == (user ? user._id : null) &&
                                                <div className='onerOptions'>
                                                    <i><MdMoreVert /></i>
                                                    <ul role="menu">
                                                        <li role="menuitem"><button><CiEdit /> Edit</button></li>
                                                        <li role="menuitem"><button onClick={() => handleCommentDel(com.id)}><MdDelete /> Delete</button></li>
                                                    </ul>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {currentComments.length < comments.length
                                ? <div className="mor" onClick={handleShowMore}><button> Show More...</button></div>
                                : <div className="mor" onClick={handleShowLess}><button> Show Less...</button></div>
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