


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css'
import axios from 'axios';

const Login = () => {
  


  const [values, setvalues] = useState({
 
    username: '',

    password: ''
   
  });

  // const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login',values);
      // setMessage(response.data.message);
      console.log('Login successful:');
    } catch (error) {
      // setMessage(error.response.data.message);
      console.error('Loginfdf failed:');
    }
  };


  return (
    <div>
      <form onSubmit={handleSubmit}>
   
        <div className='logo'>
        <img src={require('/Volumes/coding 1/backend/school_management/client/management/src/Dashboards/assets/D47pITKNRqPRaDQajUaj0Wg0Go2X+T9Wnsb06M2kwQAAAABJRU5ErkJggg==.png')} alt="" />
        <p> sign in your account</p>
            </div>

        <div className="inputs">

        <label htmlFor="">username</label> <br />
        <input type="text" name="username" id="" placeholder='please enter your user name' onChange={e=>setvalues({...values,username:e.target.value})}  /><br />

        <label htmlFor="">password </label> <br />
        <input type="text" name="password" id="" placeholder='please enter your password'  onChange={e=>setvalues({...values,password:e.target.value})} /><br />
       
      
        <button type='submit'>sign me in </button>
        <p>don't have an account <Link to='/authentication/register'>sign up</Link></p>
        </div>


      </form>
    </div>
  );
};

export default Login;

