import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import UserInfo from '../../components/UserInfo/UserInfo';

import './Profile.css'

function Profile() {
    const { userId } = useParams();
    const {  } = useContext(UserContext);
    
    useEffect(() => {
        const getAuther = async () => {
            try {
                const postData = await get(postId);
                console.log('post :', postData);
                setPost(postData);
            } catch (error) {
                console.log(`Error fitshing post with id: ${postId}`, error);
            }
        };
        getAuther();
    }, [userId])
    
    return (
        <main>
            <UserInfo />
        </main>
    )
}

export default Profile