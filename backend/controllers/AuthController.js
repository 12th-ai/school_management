const authservices = require('../Services/Auth.Services');

const CreateAcount = async (req, res, next) => {
    try {
        const userId = await authservices.createUser(req);

        res.json({ message: 'User created successfully', userId });
    } catch (error) {
        if (error.message === 'User already exists') {
            return res.status(409).json({ message: error.message }); // 409 Conflict
        }

        next(error); // Pass the error to the error handling middleware
        console.log(error);
    }
};


const login = async (req, res, next) => {
    const { username, password } = req.body;
  
    try {
      const token = await authservices.login(username, password);
      res.cookie('token', token, { httpOnly: true });
      res.json({ message: 'Login successful' });
    } catch (error) {
      res.status(401).json({ message: error.message });
    }
  };

module.exports = {
    CreateAcount,
    login
};
