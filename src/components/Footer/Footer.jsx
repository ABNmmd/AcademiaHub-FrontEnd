import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="copywrite">
          <div className="txt">
            <h1>Academia<span>Hub</span></h1>
            <p>By <a href=''>Mohamed Abnoune</a> 2024. All Rights Reserved.</p>
          </div>
        </div>
        <ul className="links">
          <li><a href="/">Terms of Use</a></li>
          <li><a href="/">Privacy Policy</a></li>
          <li><a href="/">Cookie Policy</a></li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer