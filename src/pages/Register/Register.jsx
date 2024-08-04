import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { register } from '../../services/api.js'

import { CiMail, CiUser, CiRead, CiUnread } from "react-icons/ci";

import './Register.css'

function Register({ isAuth, setIsAuth }) {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const data = await register({ email, username, password });
      console.log('register successful:', data);
    } catch (error) {
      setError(error.message);
    }
  }

  const [isSafe, setIsSafe] = useState(false);

  return (
    <main>
      <div className="form-container">
        <div className="headline">
          <h2>Register</h2>
        </div>
        <form onSubmit={handleRegistration}>
          <div>
            <input type="email" name="email" id="email" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
            <CiMail />
          </div>
          <div>
            <input type="text" name="username" id="username" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
            <CiUser />
          </div>
          <div className='pass'>
            <input type={ isSafe ? "text" : "password" } name="password" id="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
            { isSafe ? <CiUnread onClick={() => setIsSafe(!isSafe)} /> : <CiRead onClick={() => setIsSafe(!isSafe)} /> }
          </div>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <a href="/Login">Login</a></p>
      </div>
    </main>
  )
}

export default Register