//require mysql
import mysql = require('mysql');
//require environment file
import dotenv from 'dotenv';

dotenv.config();

//Database connection
const db: mysql.Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});

db.connect((err) => {
    if (err) throw err;
    console.log("Connected");
})
//export db
export default db;