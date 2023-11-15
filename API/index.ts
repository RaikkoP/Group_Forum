import express, { Application, Request, Response } from "express";
import cors from "cors";
import bodyParser from "body-parser";
import bcrypt from "bcryptjs";
import regex from "./utility/regex_configuration";
import path from "path";
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

//regex test
app.post("/test", (req, res) => {
  console.log("Testing");
  if (
    regex.userRegEx.test(req.body.username) &&
    regex.passwordRegEx.test(req.body.password)
  ) {
    console.log("Test username and password are valid");
  } else {
    console.log("Test username and/or password are invalid");
  }
});

// //routes
// import userRoutes from './routes/user';

// //route setup
// app.use('/', userRoutes);

app.listen(4000, () => {
  console.log("Listening on port 4000");
});
