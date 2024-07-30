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
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
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