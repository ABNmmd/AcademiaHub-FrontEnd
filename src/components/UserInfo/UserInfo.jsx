import React from 'react'

import './UserInfo.css'

import bg from "../../assets/download.png"

function UserInfo({ author }) {
    return (
        <section className='userInfo'>
            <div className="info-container">
                <div>
                    <img src={bg} alt="" />

                </div>
            </div>
        </section>
    )
}

export default UserInfo