import React from 'react'
import Toggle from "react-toggle";
import { IoPerson } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";

import './Header.css'
import "react-toggle/style.css"

function Header({ isAuth, isDark, setIsDark }) {
  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>Academia<span>Hub</span></h1>
        </div>
        <div className="container">
          <ul className='nav'>
            <li><a href="/">Home</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="categories">Categories</a></li>
            <li><a href="contact">Contact</a></li>
          </ul>
          <div className="icons-container">
            <div>
              <a href="/search"><IoSearchSharp /></a>
            </div>
            {isAuth ?
              (<div className='log-cont'>
                <img src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc" alt="" />
                <ul role="menu">
                  <li role="menuitem"><a href="/user1">User1</a></li>
                  <li role="menuitem"><a href="/login">Login</a></li>
                </ul>
              </div>)
              :
              (<div className='log-cont'>
                <IoPerson />
                <ul role="menu">
                  <li role="menuitem"><a href="/register">Register</a></li>
                  <li role="menuitem"><a href="/login">Login</a></li>
                </ul>
              </div>)
            }
            <Toggle
              checked={isDark}
              onChange={({ target }) => setIsDark(target.checked)}
              icons={{ checked: "", unchecked: "" }}
              aria-label="Dark mode toggle"
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header