import { createContext, useState } from 'react';
import { createComment, getComments, updateComment, deleteComment } from '../services/api';

const PostsContext = createContext();

const PostsProvider = ({ children }) => {
    const [comments, setComments] = useState([]);

    
}