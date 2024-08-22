import React, { useContext, useRef, useState } from 'react'
import { UserContext } from '../../contexts/UserContext';

import './UserInfo.css'
import { MdModeEdit } from "react-icons/md";
import { IoIosCamera } from "react-icons/io";
import bg from "../../assets/download.png"

function UserInfo({ author }) {
    const [editMode, setEditMode] = useState(true);
    const { user } = useContext(UserContext);
    const textareaRef = useRef(null);


    return (
        <section className='userInfo'>
            {editMode
                ? <div className="info-edit">
                    <div className='author'>
                        <button>
                            <img src={bg} alt="" />
                            <IoIosCamera />
                        </button>
                        <input type="text" value={author?.username} />
                    </div>
                    <textarea ref={textareaRef}>{author?.bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, id. Doloremque exercitationem ipsa explicabo ex hic vero excepturi rerum eveniet, ipsum, consequuntur maxime ullam odio quod architecto enim eius modi!'}</textarea>
                    <div>
                        <button>Cancel</button>
                        <button>Update</button>
                    </div>
                </div>
                : <div className="info-container">
                    {author?._id == user?._id &&
                        <button className="i">
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