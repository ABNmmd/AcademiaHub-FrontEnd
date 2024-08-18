import React, { useContext, useEffect, useRef, useState } from 'react'
import { CommentsContext } from '../../contexts/CommentContext';

import './Comments.css'
import { BiSolidLike, BiSolidDislike } from "react-icons/bi";
import { MdMoreVert } from "react-icons/md";
import prf from '../../assets/download.png'

function Comments({ postId, showComment }) {
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
    useEffect(() => {
        const getCom = async (postId) => {
            try {
                const commentsData = await getAllComments(postId);
                setComments(commentsData);
            } catch (error) {
                console.error('Error fetching comments:', error);
            }
        }
        getCom(postId);
    }, []);

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
        event.target.style.height = 'auto';
        event.target.style.height = event.target.scrollHeight + 'px';
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
        const newComments = comments.slice(0, currentPage * commentsPerPage);
        setCurrentComments(newComments);
    }, [currentPage, comments]);


    return (
        <section className="comments">
            <div className="comments-container">
                <div className="head">
                    <h3>{comments.length} comments</h3>
                </div>
                <div className='body'>
                    <div className="comment-edit-box">
                        <div className="user">
                            <img src={prf} alt="" />
                        </div>
                        <div className="cont">
                            <textarea ref={textareaRef} type="text" placeholder='Add a comment' onChange={handleInputChange} onInput={handleResize} />
                            {<div className={`i-con ${activeBtn ? 'active' : null}`}>
                                <button type="reset" onClick={handleCancel}>Cancel</button>
                                <button type="submit">Send</button>
                            </div>}
                        </div>
                    </div>
                    {comments.length > 0 ?
                        <>
                            {currentComments.map((com, index) => (
                                <div className="comment-box" key={index}>
                                    <div className="user">
                                        <img src={prf} alt="" />
                                    </div>
                                    <div className="cont">
                                        <span>Jhon Doe</span><span className='time'>2 days ago</span>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                        <div className="inter">
                                            <button className={true ? 'interacted' : null}><BiSolidLike /> {com.likes.length}</button>
                                            <button className={false ? 'interacted' : null}><BiSolidDislike /> {com.dislikes.length}</button>
                                            {<button><MdMoreVert /></button>}
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