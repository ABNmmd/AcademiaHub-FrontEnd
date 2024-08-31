import React, { useContext, useState } from 'react'
import Toggle from "react-toggle";
import { UserContext } from '../../contexts/UserContext';
import { IoPerson, IoSearchSharp, IoClose } from "react-icons/io5";
import { CiEdit, CiUser, CiLogout } from "react-icons/ci";
import { SlMenu } from "react-icons/sl";

import './Header.css'
import "react-toggle/style.css"
import profile from '../../assets/download.png'

function Header({ isDark, setIsDark }) {
  const { user, isAuth, logoutUser } = useContext(UserContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div className="header-container">
        <div className="logo">
          <h1>Academia<span>Hub</span></h1>
        </div>
        <div className="container">
          <div className="menu-icon" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <SlMenu />}
          </div>
          <ul className={`nav ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="/">Home</a></li>
            <li><a href="/categories">Categories</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/#newsletter">Newsletter</a></li>
          </ul>
          <div className="icons-container">
            <div>
              <a href="/search"><IoSearchSharp /></a>
            </div>
            {isAuth ?
              (<div className='log-cont'>
                <img src={profile} alt="" />
                <ul role="menu">
                  <li role="menuitem"><a href={`/profile/${user?._id}`}><CiUser />{user?.username || "Unknown User"}</a></li>
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