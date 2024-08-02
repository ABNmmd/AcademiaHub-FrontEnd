import React, { useState } from 'react'
import { register } from '../../services/api.js'

import './Register.css'

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const data = await register({ email, username, password });
      console.log('Login successful:', data);
    } catch (error) {
      setError(error.message);
    }
  }

  return (
    <main>
      <div className="form-container">
        <div className="headline">
          <h2>Register</h2>
        </div>
        <form onSubmit={handleRegistration}>
          <div>
            <label htmlFor="email">E-mail</label>
            <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <label htmlFor="username">Username</label>
            <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Register</button>
        </form>
      </div>
    </main>
  )
}

export default Register