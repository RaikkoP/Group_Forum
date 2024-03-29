import express from "express";
import cors from "cors";
import session from 'express-session';
import dotenv from 'dotenv';
import path = require('path');

dotenv.config();
const app = express();

//Body parser
app.use(express.json());

// Cross origin setup
app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true,
}));

//Session setup
//ADD NEW SESSION
app.use(session({
  secret: process.env.SECRET_KEYS || "secret",
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000, sameSite: false },
}));

// Import routes 
// import userRoutes from './routes/user';
import authentication from './routes/authentication';
import post from './routes/post';


// Route setup
// app.use('/', userRoutes);
app.use('/authentication', authentication);
app.use('/post', post);
app.use('/posts/image/', express.static(path.resolve(__dirname, 'images')))

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
