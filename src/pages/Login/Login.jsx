import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';
import { CiMail, CiRead, CiUnread } from "react-icons/ci";

import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { loginUser, isAuth } = useContext(UserContext)

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);


  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser({ email, password });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  }

  const [isSafe, setIsSafe] = useState(false);

  return (
    <main>
      <section className="formSec">
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
      </section>
    </main>
  )
}

export default Login