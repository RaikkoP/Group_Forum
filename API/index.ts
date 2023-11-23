import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import regex from "./utility/regex_configuration";
require("dotenv").config();

const app: Application = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Session setup

//ADD NEW SESSION WITH JWT

app.get("/", (req, res) => {
  console.log("Connected");
  res.send("Hello, World!");
});



// //routes
// import userRoutes from './routes/user';
import registerRoutes from './routes/register';

// //route setup
// app.use('/', userRoutes);
app.use('/register', registerRoutes);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
