const bcrypt = require('bcrypt');
const db = require('../Config/db');
const jwt = require('jsonwebtoken');
const path = require('path');
const cors = require('cors');

const createUser = async (req) => {
    // Extract password and user data from request body
    const { password, username, email } = req.body;

    // Check if user already exists
    const [existingUser] = await db.query('SELECT * FROM users WHERE email = ? OR user_name = ?', [email, username]);
    
    if (existingUser.length > 0) {
        throw new Error('User already exists');
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10); // 10 is the salt rounds

    // Use a default emoji if no image file is provided
    const profileImage = req.file ? req.file.filename : '😊'; // Default emoji

    // Construct values array with hashed password
    const values = [
        username,
        email,
        hashedPassword,
        profileImage
    ];

    // Insert user data into the database
    const [rows] = await db.query('INSERT INTO users (user_name, email, password, user_profile) VALUES (?)', [values]);

    return rows;
};



const generateToken = (user) => {
  return jwt.sign({ id: user.user_id }, process.env.JWT_SECRET, { expiresIn: '1h' });
};

const login = async (username, password) => {
  const [rows] = await db.query('SELECT * FROM users WHERE user_name = ?', [username]);
  const user = rows[0];
  
  if (!user) {
    throw new Error('Invalid username ');
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) {
    throw new Error('Invalid password');
  }

  const token = generateToken(user);
  return token;
};




module.exports = {
    createUser,
    login
};
