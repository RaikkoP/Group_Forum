/* eslint-disable @typescript-eslint/no-var-requires */
import express, { Application } from "express";
import cors from "cors";
import bodyParser from "body-parser";
const session = require('express-session');
require("dotenv").config();

// App setup
const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//Session setup
//ADD NEW SESSION WITH JWT
app.use(session({
  secret: process.env.SECRET_KEYS,
  resave: false,
  saveUninitialized: false,
  cookie: {
    //Set max age of cookie to 5 mintues
    maxAge: 300000,
    sameSite: true,
    //Later when hosted on HTTPS website
    //secure: true,
  }
}));

// Test
app.get("/", (req, res) => {
  console.log("Connected");
  res.send("Hello, World!");
});

// Import routes 
// import userRoutes from './routes/user';
import registerRoutes from './routes/register';
import loginRoutes from './routes/login';

// Route setup
// app.use('/', userRoutes);
app.use('/register', registerRoutes);
app.use('/login', loginRoutes);


app.listen(4000, () => {
  console.log("Listening on port 4000");
});
