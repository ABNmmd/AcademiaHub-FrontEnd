import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../../services/api.js'

import { CiMail, CiRead, CiUnread } from "react-icons/ci";

import './Login.css'

function Login({ isAuth, setIsAuth }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    console.log(isAuth);
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      console.log('Login successful:', data);
    } catch (error) {
      setError(error.message);
    }
  }

  const [isSafe, setIsSafe] = useState(false);

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
            <CiMail />
          </div>
          <div className='pass'>
            <input type={ isSafe ? "text" : "password" } name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            { isSafe ? <CiUnread onClick={() => setIsSafe(!isSafe)} /> : <CiRead onClick={() => setIsSafe(!isSafe)} /> }
          </div>
          {error && <p className='error' style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Login</button>
        </form>
        <p>Don't have an account? <a href="/register">Register</a></p>
      </div>
    </main>
  )
}

export default Login