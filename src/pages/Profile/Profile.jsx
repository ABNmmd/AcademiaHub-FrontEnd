import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { PostsContext } from '../../contexts/PostsContext';

import UserInfo from '../../components/UserInfo/UserInfo';
import PostLayout from '../../components/PostLayout/PostLayout';

import './Profile.css'

function Profile() {
    const { userId } = useParams();
    const [author, setAuthor] = useState({});
    const [filteredP, setFilteredP] = useState([]);
    const { getProfileData } = useContext(UserContext);
    const { posts } = useContext(PostsContext);

    // const posts = [
    //     {
    //         authorId: "123",
    //         title: "This Is A Blog1",
    //         content: "<h1>hello welcome</h1><p>Enjoy Reading</p>",
    //         tags: ["tech", "sports"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    //     {
    //         authorId: "Jason Francisco",
    //         title: "The Impact of Technology on the Workplace: How Technology is Changing",
    //         content: "<h1>hello welcome again</h1><p>Enjoy Reading</p>",
    //         tags: ["Technology", "Sport"],
    //         likes: [],
    //         dislikes: [],
    //         createdAt: "22/02/2024",
    //         updatedAt: "22/02/2024",
    //     },
    // ];
    useEffect(() => {
        if (author?._id) {
            setFilteredP(posts.filter((p) => p.authorId === author._id));
        }
        console.log('author posts ', posts);
    }, [posts, author]);

    useEffect(() => {
        const getAuthor = async () => {
            try {
                const authorData = await getProfileData(userId);
                console.log('author :', userId, authorData);
                setAuthor(authorData);
            } catch (error) {
                console.log(`Error fitshing author with id: ${userId}`, error);
            }
        };
        getAuthor();
    }, [userId]);

    return (
        <main>
            <UserInfo author={author} />
            <PostLayout p={filteredP} />
        </main>
    )
}

export default Profile