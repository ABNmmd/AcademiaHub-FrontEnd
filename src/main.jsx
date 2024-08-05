import React, {useEffect, useState} from 'react'
import useLocalStorage from "use-local-storage";
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import { checkAuthStatus } from './services/api.js';

import Home from './pages/Home/Home.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

import './index.css'



const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register isAuth={isAuth} setIsAuth={setIsAuth} />,
    },
    {
      path: "/login",
      element: <Login isAuth={isAuth} setIsAuth={setIsAuth} />,
    },
  ]);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);
  
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

  return (
    <div className='page-container'>
      <Header isAuth={isAuth} setIsAuth={setIsAuth} isDark={isDark} setIsDark={setIsDark} />
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);