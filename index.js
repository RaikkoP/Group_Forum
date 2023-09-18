//Packages
const express = require('express');
const mysql = require('mysql');
const app = express();
require('dotenv').config();

//Db Connection

const db = mysql.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
});

app.get('/', (req, res) => {
    console.log("Connected")
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})