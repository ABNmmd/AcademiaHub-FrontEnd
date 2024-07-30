import React from 'react'
import Toggle from "react-toggle";
import { BsPersonCircle } from "react-icons/bs";
import { IoSearchCircleOutline } from "react-icons/io5";

import './Header.css'
import "react-toggle/style.css"

function Header({ isDark, setIsDark }) {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>Academia<span>Hub</span></h1>
        </div>
        <div className="container">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="categories">Categories</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
          <div className="icons-container">
            <IoSearchCircleOutline />
            <BsPersonCircle />
            <Toggle
              checked={isDark}
              onChange={({ target }) => setIsDark(target.checked)}
              icons={{ checked: "🌙", unchecked: "🔆" }}
              aria-label="Dark mode toggle"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header