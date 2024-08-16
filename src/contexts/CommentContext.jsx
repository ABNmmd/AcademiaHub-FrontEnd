import { createContext, useState } from 'react';
import { createComment, getComments, updateComment, deleteComment } from '../services/api';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const createNewComment = async (commentData) => {
        try {
            const newComment = await createComment(commentData);
            return newComment;
        } catch (error) {
            console.error('Error creating comment', error)
        }
    }

    const getAllComments = async (postId) => {
        try {
            const comments = await getComments(postId);
            return comments;
        } catch (error) {
            console.error('Error fetching comments:', error);
        }
    }

    const updateOldComment = async (id, newCommentData) => {
        try {
            const updatedComment = await updateComment(id, newPostData);
            return updatedComment;
        } catch (error) {
            console.error('Error updating Comment', error);
        }
    }
}