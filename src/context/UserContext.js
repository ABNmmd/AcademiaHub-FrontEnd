import { createContext, useState, useEffect } from 'react';
import { checkAuthStatus, login, logout, register } from '../services/api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

    
}