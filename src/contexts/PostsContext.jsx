import { createContext, useState, useEffect } from 'react';
import { createPost, getPosts, getPostById, updatePost, deletePost, likePost, dislikePost } from '../services/api';

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
            // console.log("Payload being sent:", postData);
            const newPost = await createPost(postData);
            setPosts((prevPosts) => [...prevPosts, newPost]);
            return newPost;
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
            return updatedPost;
        } catch (error) {
            console.error('Error updating post', error);
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

    const likePostAction = async (id) => {
        try {
            const updatedPost = await likePost(id);
            setPosts((prevPosts) =>
                prevPosts.map((post) => (post._id === id ? updatedPost : post))
            );
            return updatedPost;
        } catch (error) {
            console.error('Error liking post', error);
        }
    }

    const dislikePostAction = async (id) => {
        try {
            const updatedPost = await dislikePost(id);
            setPosts((prevPosts) =>
                prevPosts.map((post) => (post._id === id ? updatedPost : post))
            );
            return updatedPost;
        } catch (error) {
            console.error('Error disliking post', error);
        }
    }

    return (
        <PostsContext.Provider value={{
            posts,
            createNewPost,
            getOnePost,
            updateOldPost,
            deleteExistingPost,
            likePostAction,
            dislikePostAction
        }}>
            {children}
        </PostsContext.Provider>
    );
}

export { PostsContext, PostsProvider };