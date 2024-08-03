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
    <div>Login</div>
  )
}

export default Login