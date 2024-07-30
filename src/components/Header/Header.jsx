import React from 'react'
import Toggle from "react-toggle";

import './Header.css'
import "react-toggle/style.css"

function Header({ isDark, setIsDark }) {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>AcademiaHub</h1>
        </div>
        <div className="container">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Blog</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Categories</a></li>
            <li><a href="">Contact</a></li>
          </ul>
          <div className="icons-container">
            <i></i>
            <i></i>
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