//require mysql
const mysql = require('mysql');
//require environment file
require('dotenv').config();

//Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

//export db
module.exports = db;