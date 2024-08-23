import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../contexts/UserContext';

import './UserInfo.css'
import { MdModeEdit } from "react-icons/md";
import { IoIosCamera } from "react-icons/io";
import bg from "../../assets/download.png"

function UserInfo({ author }) {
    const [editMode, setEditMode] = useState(true);
    const { user, isAuth, updateAuthorProfile } = useContext(UserContext);
    const textareaRef = useRef(null);
    const usernameRef = useRef(null);
    const emailRef = useRef(null);
    
    const handleComUpdate = async () => {
        const username = usernameRef.current.value;
        const bio = textareaRef.current.value;
        const email = emailRef.current.value;
        // handling the profile pic

        try {
            setError(null);
            if (!isAuth) {
                setError('Unautorized. Please login first');
                return
            }

            if (!username || !email) {
                setError('Invalid content. Please try again');
                return
            }
            const updatedBio = await updateAuthorProfile({ username, email, bio });
            setEditMode(false)
        } catch (error) {
            setError('Failed to submit comment. Please try again.');
        }
    }

    return (
        <section className='userInfo'>
            {editMode
                ? <div className="info-edit">
                    <div className='author'>
                        <button>
                            <img src={bg} alt="" />
                            <IoIosCamera />
                        </button>
                        <input ref={usernameRef} type="text" value={author?.username} />
                        <input ref={emailRef} type="text" value={author?.email} />
                    </div>
                    <textarea ref={textareaRef}>{author?.bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, id. Doloremque exercitationem ipsa explicabo ex hic vero excepturi rerum eveniet, ipsum, consequuntur maxime ullam odio quod architecto enim eius modi!'}</textarea>
                    <div className='btns'>
                        <button onClick={() => setEditMode(false)}>Cancel</button>
                        <button onClick={handleComUpdate}>Update</button>
                    </div>
                </div>
                : <div className="info-container">
                    {author?._id == user?._id &&
                        <button className="i" onClick={() => setEditMode(true)}>
                            <MdModeEdit />
                        </button>
                    }
                    <div className='author'>
                        <img src={bg} alt="" />
                        <h2>{author?.username}</h2>
                    </div>
                    <p>{author?.bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, id. Doloremque exercitationem ipsa explicabo ex hic vero excepturi rerum eveniet, ipsum, consequuntur maxime ullam odio quod architecto enim eius modi!'}</p>
                </div>
            }
        </section>
    )
}

export default UserInfo