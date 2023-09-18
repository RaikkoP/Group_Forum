//Packages
const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();

//Db Connection

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

app.get('/', (req, res) => {
    console.log("Connected")
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})