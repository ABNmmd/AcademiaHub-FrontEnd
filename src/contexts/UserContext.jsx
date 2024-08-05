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

    const registerUser = async (credentials) => {
        try {
            const userData = await register(credentials);
            setUser(userData);
            setIsAuth(true);
            localStorage.setItem('isAuth', 'true');
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

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

    const logoutUser = async () => {
        try {
            await logout();
            setUser(null);
            setIsAuth(false);
            localStorage.setItem('isAuth', 'false');
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <UserContext.Provider value={{ user, isAuth, loginUser, logoutUser, registerUser }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };