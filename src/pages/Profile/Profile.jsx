import React from 'react'
import { useParams } from 'react-router-dom';

import UserInfo from '../../components/UserInfo/UserInfo';

import './Profile.css'

function Profile() {
    const { userId } = useParams();
    
    return (
        <main>
            <UserInfo />
        </main>
    )
}

export default Profile