import React from 'react'

import './UserInfo.css'

import bg from "../../assets/download.png"

function UserInfo({ author }) {
    return (
        <section className='userInfo'>
            <div className="info-container">
                <div>
                    <img src={bg} alt="" />
                    <h2>{author?.username}</h2>
                </div>
                <p>{author?.bio || 'no bio for this profile'}</p>
            </div>
        </section>
    )
}

export default UserInfo