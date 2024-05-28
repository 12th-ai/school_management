// AuthRouter.js

const express = require('express');
const router = express.Router();

const path = require('path');
const db = require('../Config/db');
const cors = require('cors');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/'); // Define the destination directory for uploaded files
    },
    filename: function (req, file, cb) {
      cb(null,file.fieldname + "_" + Date.now() + path.extname(file.originalname)); // Define how the file should be named
    }
  });
  

  const upload = multer({ storage: storage })


const authControllers = require('../controllers/AuthController');


router.post('/api/auth/', upload.single("image"),authControllers.CreateAcount);
router.post('/api/auth/login/', authControllers.login);

module.exports = router;