import { createContext, useState, useEffect } from 'react';
import { checkAuthStatus, login, logout, register } from '../services/api';

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth') === 'true');

    useEffect(() => {
        const verifyAuth = async () => {
            try {
                const authenticated = await checkAuthStatus();
                setIsAuth(authenticated);
                localStorage.setItem('isAuth', authenticated);
                // localStorage.setItem('isAuth', true); //for easy dev
            } catch (error) {
                console.error('Error checking auth status:', error);
            }
        };
        verifyAuth();
    }, []);

    const loginUser = async (credentials) => {
        try {
          const userData = await login(credentials);
          setUser(userData);
          setIsAuth(true);
          localStorage.setItem('isAuth', 'true');
        } catch (error) {
          console.error('Error logging in:', error);
        }
      };
}