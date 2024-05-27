


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Style/style.css'

const Register = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  };

  const handleClick = () => {
    document.getElementById('imageInput').click();
  };

  return (
    <div>
      <form>
   
        <div className='logo'>
        <img src={require('/Volumes/coding 1/backend/school_management/client/management/src/Dashboards/assets/D47pITKNRqPRaDQajUaj0Wg0Go2X+T9Wnsb06M2kwQAAAABJRU5ErkJggg==.png')} alt="" />
        <p> sign in your account</p>
            </div>

        <div className="inputs">

        <label htmlFor="">username</label> <br />
        <input type="text" name="username" id="" placeholder='please enter your user name' /><br />

        <label htmlFor="">password </label> <br />
        <input type="text" name="email" id="" placeholder='please enter your password'  /><br />
       
      
        <button>sign me in </button>
        <p>don't have an account <Link to='/authentication/register'>sign up</Link></p>
        </div>


      </form>
    </div>
  );
};

export default Register;

