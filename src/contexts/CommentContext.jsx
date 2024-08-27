import { createContext } from 'react';
import { createComment, getComments, updateComment, deleteComment, likeComment, dislikeComment } from '../services/api';

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

    const updateOldComment = async (id, newContent) => {
        try {
            const updatedComment = await updateComment(id, newContent);
            console.log('from context', updatedComment);
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

    const likeCommentAction = async (id) => {
        try {
            const updatedComment = await likeComment(id);
            return updatedComment;
        } catch (error) {
            console.error('Error liking comment', error);
        }
    }

    const dislikeCommentAction = async (id) => {
        try {
            const updatedComment = await dislikeComment(id);
            return updatedComment;
        } catch (error) {
            console.error('Error disliking comment', error);
        }
    }

    return (
        <CommentsContext.Provider value={{
            createNewComment,
            getAllComments,
            updateOldComment,
            deleteExistingComment,
            likeCommentAction,
            dislikeCommentAction
        }}>
            {children}
        </CommentsContext.Provider>
    );
}

export { CommentsContext, CommentsProvider };