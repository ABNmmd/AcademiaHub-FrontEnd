import { createContext, useState, useEffect } from 'react';
import { checkAuthStatus, getProfile, getUser, login, logout, register, updateProfile } from '../services/api';

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
                // localStorage.setItem('isAuth', true);
            } catch (error) {
                console.error('Error checking auth status:', error);
            }
        };
        verifyAuth();
    }, []);

    useEffect(() => {
        const getUserData = async () => {
            try {
                const user = await getUser();
                setUser(user);
                localStorage.setItem('user', JSON.stringify(user));
            } catch (error) {
                console.error('Error checking auth status:', error);
            }
        };
        if (isAuth) getUserData();
    }, [isAuth]);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    useEffect(() => {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        } else {
            localStorage.removeItem('user');
        }
    }, [user]);

    const registerUser = async (credentials) => {
        try {
            const userData = await register(credentials);
            // setUser(userData.user);
            setIsAuth(true);
            localStorage.setItem('isAuth', 'true');
        } catch (error) {
            console.error('Error registering:', error);
        }
    };

    const loginUser = async (credentials) => {
        try {
            const userData = await login(credentials);
            // setUser(userData.user);
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

    const getProfileData = async (userId) => {
        try {
            const user = await getProfile(userId);
            return user;
        } catch (error) {
            console.error('Error getting profile data:', error);
        }
    };

    const updateAuthorProfile = async (newProfileData) => {
        try {
            const updatedProfile = await updateProfile(newProfileData);
            if (updatedProfile.user) setUser(updatedProfile.user);
            return updatedProfile.user;
        } catch (error) {
            console.error('Error updating profile', error);
        }
    }

    return (
        <UserContext.Provider value={{ user, isAuth, loginUser, logoutUser, registerUser, getProfileData, updateAuthorProfile }}>
            {children}
        </UserContext.Provider>
    );
}

export { UserContext, UserProvider };