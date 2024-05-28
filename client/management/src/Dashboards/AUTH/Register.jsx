


import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css'
import axios from 'axios';

const Register = () => {

  const [values, setvalues] = useState({
 
    username: '',
    email: '',
    password: '',
   
  });

  const [preview, setPreview] = useState(null);
  useEffect(() => {
    const inpt = document.querySelector('#profile');
    const img = document.querySelector('#imagePrev');
    
    const handleChange = (ev) => {
      const url = URL.createObjectURL(ev.target.files[0]);
      setPreview(url);
      const label = document.querySelector('#profilepreview');
      label.classList.remove('first-prev');
      img.src = url;
    };

    inpt.addEventListener('input', handleChange);

    return () => {
      inpt.removeEventListener('input', handleChange);
    };
  }, []); // Empty dependency array ensures the effect runs only once after initial render



  const [file, setfile] = useState();
  const handleFileChange = (e)=>{
      setfile(e.target.files[0]);
  }

   
  const handlesubmit = (e) =>{

    e.preventDefault();
    // console.log(formdata)
  const formdata = new FormData();
  formdata.append('image',file);
  formdata.append('email', values.email);
  formdata.append('password', values.password);
  formdata.append('username', values.username);

  axios.post('http://localhost:3000/api/auth/', formdata)
  .then(res => {
    console.log('Server Response:', res.data.message); // Display server message
  })
  .catch(err => {
    console.error('Error:', err.response ? err.response.data.message : err.message); // Display error message from server
  });

  }  
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <div className="image">
        <div className="parts-img" style={{ marginTop: 10, marginBottom: 20 }}>
                  <div className="crd-image">
                    <label className="first-prev" id="profilepreview" htmlFor="profile">
                      <img src="" alt="" id="imagePrev" />
                      <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" viewBox="0 0 48 48"><path d="M11.5 6C8.4802259 6 6 8.4802259 6 11.5L6 36.5C6 39.519774 8.4802259 42 11.5 42L36.5 42C39.519774 42 42 39.519774 42 36.5L42 11.5C42 8.4802259 39.519774 6 36.5 6L11.5 6 z M 11.5 9L36.5 9C37.898226 9 39 10.101774 39 11.5L39 31.955078L32.988281 26.138672 A 1.50015 1.50015 0 0 0 32.986328 26.136719C32.208234 25.385403 31.18685 25 30.173828 25C29.16122 25 28.13988 25.385387 27.361328 26.138672L25.3125 28.121094L19.132812 22.142578C18.35636 21.389748 17.336076 21 16.318359 21C15.299078 21 14.280986 21.392173 13.505859 22.140625 A 1.50015 1.50015 0 0 0 13.503906 22.142578L9 26.5L9 11.5C9 10.101774 10.101774 9 11.5 9 z M 30.5 13C29.125 13 27.903815 13.569633 27.128906 14.441406C26.353997 15.313179 26 16.416667 26 17.5C26 18.583333 26.353997 19.686821 27.128906 20.558594C27.903815 21.430367 29.125 22 30.5 22C31.875 22 33.096185 21.430367 33.871094 20.558594C34.646003 19.686821 35 18.583333 35 17.5C35 16.416667 34.646003 15.313179 33.871094 14.441406C33.096185 13.569633 31.875 13 30.5 13 z M 30.5 16C31.124999 16 31.403816 16.180367 31.628906 16.433594C31.853997 16.686821 32 17.083333 32 17.5C32 17.916667 31.853997 18.313179 31.628906 18.566406C31.403816 18.819633 31.124999 19 30.5 19C29.875001 19 29.596184 18.819633 29.371094 18.566406C29.146003 18.313179 29 17.916667 29 17.5C29 17.083333 29.146003 16.686821 29.371094 16.433594C29.596184 16.180367 29.875001 16 30.5 16 z M 16.318359 24C16.578643 24 16.835328 24.09366 17.044922 24.296875 A 1.50015 1.50015 0 0 0 17.046875 24.298828L23.154297 30.207031L14.064453 39L11.5 39C10.101774 39 9 37.898226 9 36.5L9 30.673828L15.589844 24.298828C15.802764 24.093234 16.059641 24 16.318359 24 z M 30.173828 28C30.438806 28 30.692485 28.09229 30.902344 28.294922L39 36.128906L39 36.5C39 37.898226 37.898226 39 36.5 39L18.380859 39L29.447266 28.294922C29.654714 28.094207 29.910436 28 30.173828 28 z" /></svg>
                    </label>
                    <input type="file" name="image" id="profile" accept="image/*" onChange={handleFileChange} />
                  </div>
                  </div>
        </div>

        <div className="inputs">

        <label htmlFor="">username</label> <br />
        <input type="text" name="username" id="" placeholder='please enter your user name' onChange={e=>setvalues({...values,username:e.target.value})} /><br />

        <label htmlFor="">email </label> <br />
        <input type="text" name="email" id="" placeholder='please enter your email address' onChange={e=>setvalues({...values,email:e.target.value})}  /><br />

        <label htmlFor="">password</label> <br />
        <input type="text" name="password" id="" placeholder='please enter your password' onChange={e=>setvalues({...values,password:e.target.value})}  /><br />

        <button type="submit">sign me up</button>
        <p>already have an account  <Link to='/authentication'>sign in</Link></p>
        </div>


      </form>
    </div>
  );
};

export default Register;

