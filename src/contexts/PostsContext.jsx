import { createContext, useState, useEffect } from 'react';
import { createPost, getPosts, getPostById, updatePost, deletePost, } from '../services/api';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    const createPost = async (postData) => {
        try{
            const newPost = await createPost(postData);
            setPosts([...posts, newPost]);
        }catch(error){
            console.error('Error creating post');
        }
    }
}

export { PostsContext, PostsProvider };