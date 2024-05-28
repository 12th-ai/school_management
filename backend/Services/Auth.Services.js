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






const login = async (username, password) => {
  const [users] = await db.query('SELECT * FROM users WHERE user_name = ?', [username]);

  if (users.length === 0) {
    throw new Error('User not found');
  }

  const user = users[0];
  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

  return token;
};

module.exports = {
  login,
};







module.exports = {
    createUser,
    login
};
