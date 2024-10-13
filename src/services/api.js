import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: 'https://node-blog-api-plum.vercel.app/api/',
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

// API call to get User data
const getUser = async () => {
    try {
        const response = await api.get('/user');
        return response.data;
    } catch (error) {
        console.error('Error getting user:', error);
    }
};


//-------------

// API call to create post
const createPost = async (postData) => {
    try {
        const response = await api.post('/posts/', postData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        // console.log("from api: ", response.data);
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
        // console.log(response.data);
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
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error getting the post ', error);
        throw error;
    }
}

// API call to update a post
const updatePost = async (id, newPostData) => {
    try {
        const response = await api.put(`/posts/${id}`, newPostData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        console.log('after api call axios', response.data);
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
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error deleting the post ', error);
        throw error;
    }
}

// API call to like a post
const likePost = async (id) => {
    try {
        const response = await api.put(`/posts/${id}/like`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error liking the post ', error);
        throw error;
    }
}

// API call to like a post
const dislikePost = async (id) => {
    try {
        const response = await api.put(`/posts/${id}/dislike`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error disliking the post ', error);
        throw error;
    }
}

//-------------

// API call to creat a comment
const createComment = async (commentData) => {
    try {
        const response = await api.post('/comments/', commentData);
        // console.log("from api: ", response.data);
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
        // console.log('comments from api for ', postId, response.data);
        return response.data;
    } catch (error) {
        console.error('Error geting the comments ', error);
        throw error;
    }
}

// API call to update comment
const updateComment = async (id, newContent) => {
    try {
        const response = await api.put(`/comments/${id}`, newContent);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating the comments ', error);
        throw error;
    }
}

// API call to delete comment
const deleteComment = async (id) => {
    try {
        await api.delete(`/comments/${id}`);
    } catch (error) {
        console.error('Error deleting the comments ', error);
        throw error
    }
}

// API call to like a comment
const likeComment = async (id) => {
    try {
        const response = await api.put(`/comments/${id}/like`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error liking the comment ', error);
        throw error;
    }
}

// API call to like a comment
const dislikeComment = async (id) => {
    try {
        const response = await api.put(`/comments/${id}/dislike`);
        // console.log(response.data);
        return response.data;
    } catch (error) {
        console.error('Error disliking the comment ', error);
        throw error;
    }
}

//-----------

// API call to get profile data
const getProfile = async (userId) => {
    try {
        const response = await api.get(`/user/${userId}`);
        // console.log('profile from api for ', userId, response.data);
        return response.data;
    } catch (error) {
        console.error('Error geting the profile ', error);
        throw error;
    }
}

// API call to update comment
const updateProfile = async (newProfileData) => {
    try {
        const response = await api.put('/user/', newProfileData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          });
        console.log('after api call for profile upd', response.data);
        return response.data;
    } catch (error) {
        console.error('Error updating the profile ', error);
        throw error;
    }
}

export {
    register,
    login,
    logout,
    checkAuthStatus,
    getUser,
    createPost,
    getPosts,
    getPostById,
    updatePost,
    deletePost,
    likePost,
    dislikePost,
    createComment,
    getComments,
    updateComment,
    deleteComment,
    likeComment,
    dislikeComment,
    getProfile,
    updateProfile,
}