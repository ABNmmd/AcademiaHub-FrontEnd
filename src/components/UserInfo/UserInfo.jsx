import React from 'react'

import './UserInfo.css'

import bg from "../../assets/download.png"

function UserInfo({ author }) {
    return (
        <section className='userInfo'>
            <div className="info-container">
                <div className='author'>
                    <img src={bg} alt="" />
                    <h2>{author?.username}</h2>
                </div>
                <p>{author?.bio || 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, id. Doloremque exercitationem ipsa explicabo ex hic vero excepturi rerum eveniet, ipsum, consequuntur maxime ullam odio quod architecto enim eius modi!'}</p>
            </div>
        </section>
    )
}

export default UserInfo