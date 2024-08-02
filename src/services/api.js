require('dotenv').config();
import axios from 'axios';

// Create an Axios instance
const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000/api',
    withCredentials: true,
});

