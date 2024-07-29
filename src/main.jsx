import {React, useState} from 'react'
import useLocalStorage from "use-local-storage";
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'


const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
const [isDark, setIsDark] = useLocalStorage("isDark", preference);

const router = createBrowserRouter([
  {
    path: "/", element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header isDark={isDark} setIsDark={setIsDark} />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)