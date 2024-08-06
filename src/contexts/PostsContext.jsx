import { createContext, useState, useEffect } from 'react';
import { createPost, getPosts, getPostById, updatePost, deletePost, } from '../services/api';

const PostsContext = createContext();

export { PostsContext,  };