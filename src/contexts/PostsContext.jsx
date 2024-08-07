import { createContext, useState, useEffect } from 'react';
import { createPost, getPosts, getPostById, updatePost, deletePost } from '../services/api';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const getAllPosts = async () => {
            try {
                const postsData = await getPosts();
                setPosts(postsData);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };
        getAllPosts();
    }, []);

    const createNewPost = async (postData) => {
        try {
            const newPost = await createPost(postData);
            setPosts((prevPosts) => [...prevPosts, newPost]);
        } catch (error) {
            console.error('Error creating post', error);
        }
    }

    const getOnePost = async (id) => {
        try {
            const postData = await getPostById(id);
            return postData;
        } catch (error) {
            console.error('Error fetching the post ', error);
        }
    }

    const updateOldPost = async (id, newPostData) => {
        try {
            const updatedPost = await updatePost(id, newPostData);
            setPosts((prevPosts) =>
                prevPosts.map((post) => (post.id === id ? updatedPost : post))
            );
        } catch (error) {
            console.error('Error creating post', error);
        }
    }

    const deleteExistingPost = async (id) => {
        try {
            await deletePost(id);
            setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        } catch (error) {
            console.error('Error deleting post', error);
        }
    }

    return (
        <PostsContext.Provider value={{ posts, createNewPost, getOnePost, updateOldPost, deleteExistingPost }}>
            {children}
        </PostsContext.Provider>
    );
}

export { PostsContext, PostsProvider };