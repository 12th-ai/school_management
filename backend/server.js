// server.js

const express = require('express');
const bodyParser = require('body-parser');
// require('express-async-errors');
const path = require('path');
const db = require('./Config/db');
const cors = require('cors');
const multer = require('multer');
// const cookieParser = require('cookie-parser');
const app = express();
const PORT = process.env.PORT || 3000;

const jwt = require('jsonwebtoken');


// routers 

app.use(bodyParser.json());
app.use(cors()); 

app.use(express.json());

const Authroutes  = require('./Routers/AuthRouters');
app.use('/', Authroutes);
app.use('/login', Authroutes);





// app.use("/api/auth", Authroutes);
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).send('Something went wrong!');
});

app.listen(PORT,()=>{
    console.log(`connected to port of ${PORT}`);
})