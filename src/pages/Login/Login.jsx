import React, { useState } from 'react'
import { login } from '../../services/api.js'

import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      console.log('Login successful:', data);
    } catch (error) {
      setError(error.message);
    }
  }
  return (
    <main>
      <div className="form-container">
        <div className="headline">
          <h2>Login</h2>
          <p>Welcome Back</p>
        </div>
        <form onSubmit={handleLogin}>
          <div>
            <input type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <input type="password" name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </main>
  )
}

export default Login