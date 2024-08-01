import React from 'react'

import './Register.css'

function Register() {
  return(
    <main>
      <div className="form-container">
        <div className="headline">
          <h2>Register</h2>
        </div>
        <form action="" method="post">
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
        </form>
      </div>
    </main>
  )
}

export default Register