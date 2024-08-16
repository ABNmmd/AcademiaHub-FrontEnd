import { createContext, useState } from 'react';
import { createComment, getComments, updateComment, deleteComment } from '../services/api';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const createNewComment = async (commentData) => {
        const newComment = await createComment(commentData);

    }
}