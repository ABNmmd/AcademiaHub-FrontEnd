import React, { useEffect, useState } from 'react'
import useLocalStorage from "use-local-storage";
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { UserProvider } from './contexts/UserContext';
import { PostsProvider } from './contexts/PostsContext';

import Home from './pages/Home/Home.jsx'
import Register from './pages/Register/Register.jsx'
import Login from './pages/Login/Login.jsx'
import Categories from './pages/Categories/Categories.jsx';
import Write from './pages/Write/Write.jsx';
import Posts from './pages/Posts/Posts.jsx';

import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'

import './index.css'



const App = () => {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  useEffect(() => {
    document.body.setAttribute('data-theme', isDark ? 'dark' : 'light');
  }, [isDark]);



  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/categories",
      element: <Categories />,
      children: [
        {
          path: ":tag",
          element: <Categories />,
        },
      ],
    },
    {
      path: "/write",
      element: <Write />,
    },
    {
      path: "/posts",
      element: <Posts />,
    },
  ]);


  return (
    <UserProvider>
      <PostsProvider>
        <div className='page-container'>
          <Header isDark={isDark} setIsDark={setIsDark} />
          <RouterProvider router={router} />
          <Footer />
        </div>
      </PostsProvider>
    </UserProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);