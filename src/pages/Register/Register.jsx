import React, {useContext, useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/UserContext';

import { CiMail, CiUser, CiRead, CiUnread } from "react-icons/ci";

import './Register.css'

function Register() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { isAuth, registerUser } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      await registerUser({ username, email, password });
      navigate('/');
    } catch (error) {
      setError(error.message);
    }
  }

  const [isSafe, setIsSafe] = useState(false);

  return (
    <main>
      <section className='formSec'>
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
      </section>
    </main>
  )
}

export default Register