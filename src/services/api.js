import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
    withCredentials: true,
});

// API call to register
const register = async (credentials) => {
    try {
        const response = await api.post('/auth/register', credentials);
        return response.data;
    } catch (error) {
        console.error('Error registring:', error);
        throw error;
    }
};

// API call to login
const login = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// API call to logout
const logout = async () => {
    try {
        const response = await api.post('/auth/logout');
        return response.data;
    } catch (error) {
        console.error('Error logging in:', error);
        throw error;
    }
};

// API call to check authentication status
const checkAuthStatus = async () => {
    try {
        const response = await api.get('/auth/status');
        return response.data.authenticated;
    } catch (error) {
        console.error('Error checking auth status:', error);
        return false;
    }
};

//-------------

// API call to create post
const createPost = async (postData) => {
    try {
        const response = await api.post('/posts/', postData);
        console.log("from api: ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error crating the post ', error);
        throw error;
    }
}

// API call to get posts
const getPosts = async () => {
    try {
        const response = await api.get('/posts/');
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error getting posts ', error);
        throw error;
    }
}

// API call to get a post
const getPostById = async (id) => {
    try {
        const response = await api.get(`/posts/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error getting the post ', error);
        throw error;
    }
}

// API call to update a post
const updatePost = async (id, newPostData) => {
    try {
        const response = await api.put(`/posts/${id}`, newPostData);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error updatting the post ', error);
        throw error;
    }
}

// API call to delete a post
const deletePost = async (id) => {
    try {
        const response = await api.delete(`/posts/${id}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting the post ', error);
        throw error;
    }
}

//-------------

// API call to creat a comment
const createComment = async (commentData) => {
    try {
        const response = await api.post('/comments/', commentData);
        console.log("from api: ", response.data);
        return response.data;
    } catch (error) {
        console.error('Error creating a comment ', error);
        throw error;
    }
}

// API call to get comments
const getComments = async (postId) => {
    try {
        const response = await api.get(`/comments/${postId}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error geting the comments ', error);
        throw error;
    }
}

export {
    register,
    login,
    logout,
    checkAuthStatus,
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    createComment,
}