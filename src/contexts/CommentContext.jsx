import { createContext, useState } from 'react';
import { createComment, getComments, updateComment, deleteComment } from '../services/api';

const CommentsContext = createContext();

const CommentsProvider = ({ children }) => {
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
            const updatedComment = await updateComment(id, newCommentData);
            return updatedComment;
        } catch (error) {
            console.error('Error updating Comment', error);
        }
    }

    const deleteExistingComment = async (id) => {
        try {
            await deleteComment(id);
        } catch (error) {
            console.error('Error deleting post', error);
        }
    }

    return (
        <PostsContext.Provider value={{ createNewComment, getAllComments, updateOldComment, deleteExistingComment }}>
            {children}
        </PostsContext.Provider>
    );
}

export { CommentsContext, CommentsProvider };