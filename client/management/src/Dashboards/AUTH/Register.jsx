


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
        <div className="image">
        <input
          type="file"
          id="imageInput"
          accept="image/*"
          style={{ display: 'none' }}
          onChange={handleImageChange}
        />

        <div onClick={handleClick} style={{ cursor: 'pointer' }}>
          {selectedImage ? (
            <img src={selectedImage} alt="Selected" />
          ) : (
            <div>
        <img src={require('../assets/feedback.png')} alt="" />
            </div>
          )}
        </div>
        </div>

        <div className="inputs">

        <label htmlFor="">username</label> <br />
        <input type="text" name="username" id="" placeholder='please enter your user name' /><br />

        <label htmlFor="">email </label> <br />
        <input type="text" name="email" id="" placeholder='please enter your email address'  /><br />

        <label htmlFor="">password</label> <br />
        <input type="text" name="password" id="" placeholder='please enter your password'  /><br />

        <button>submit</button>
        <p>already have an account  <Link to='/authentication'>sign in</Link></p>
        </div>


      </form>
    </div>
  );
};

export default Register;

