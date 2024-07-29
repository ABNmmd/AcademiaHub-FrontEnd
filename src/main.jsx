import {React, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import './index.css'

const [mode, setMode] = useState(1);


const router = createBrowserRouter([
  {
    path: "/", element: <Home/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header mode={mode} setMode={setMode} />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>,
)