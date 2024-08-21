import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import UserInfo from '../../components/UserInfo/UserInfo';

import './Profile.css'

function Profile() {
    const { userId } = useParams();
    const [author, setAuthor] = useState([]);
    const { getProfileData } = useContext(UserContext);
    
    useEffect(() => {
        const getAuther = async () => {
            try {
                const authorData = await getProfileData(userId);
                console.log('author :', userId, authorData);
                setAuthor(authorData);
            } catch (error) {
                console.log(`Error fitshing author with id: ${userId}`, error);
            }
        };
        getAuther();
    }, [userId])
    
    return (
        <main>
            <UserInfo author={author} />
        </main>
    )
}

export default Profile