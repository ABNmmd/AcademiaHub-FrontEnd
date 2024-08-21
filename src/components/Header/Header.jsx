import React, { useContext } from 'react'
import Toggle from "react-toggle";
import { UserContext } from '../../contexts/UserContext';
import { IoPerson, IoSearchSharp } from "react-icons/io5";
import { CiEdit, CiUser, CiLogout } from "react-icons/ci";

import './Header.css'
import "react-toggle/style.css"

function Header({ isDark, setIsDark }) {
  const { user, isAuth, logoutUser } = useContext(UserContext);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>Academia<span>Hub</span></h1>
        </div>
        <div className="container">
          <ul className='nav'>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
          <div className="icons-container">
            <div>
              <a href="/search"><IoSearchSharp /></a>
            </div>
            {isAuth ?
              (<div className='log-cont'>
                <img src="https://media.licdn.com/dms/image/D4D08AQE0CXu4hnoe7g/croft-frontend-shrinkToFit1024/0/1646754728586?e=2147483647&v=beta&t=ADkOVwOwmP-4rCH4y0g2_OBFlsszl01TpQPhCgt5SSc" alt="" />
                <ul role="menu">
                  <li role="menuitem"><a href="/profile/"><CiUser />{"test"}</a></li>
                  <li role="menuitem"><a href="/write"><CiEdit />Write</a></li>
                  <li role="menuitem"><button onClick={() => handleLogout()}><CiLogout />Logout</button></li>
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