import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Style/style.css';

const Login = () => {
  const [values, setValues] = useState({
    username: '',
    password: ''
  });

  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', values, { withCredentials: true });
      setMessage(response.data.message);
      console.log('Login successful:', response.data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('An error occurred during login.');
      }
      console.error('Login failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='logo'>
          <img src={require('/Volumes/coding 1/backend/school_management/client/management/src/Dashboards/assets/D47pITKNRqPRaDQajUaj0Wg0Go2X+T9Wnsb06M2kwQAAAABJRU5ErkJggg==.png')} alt="" />
          <p>Sign in to your account</p>
        </div>
        <div className="inputs">
          <label htmlFor="username">Username</label> <br />
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Please enter your username"
            onChange={e => setValues({ ...values, username: e.target.value })}
          /><br />
          <label htmlFor="password">Password</label> <br />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Please enter your password"
            onChange={e => setValues({ ...values, password: e.target.value })}
          /><br />
          <button type="submit">Sign me in</button>
          <p>Don't have an account? <Link to='/authentication/register'>Sign up</Link></p>
        </div>
        {message && <p>{message}</p>}
      </form>
    </div>
  );
};

export default Login;
