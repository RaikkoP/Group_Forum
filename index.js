//Packages
const express = require('express');
const mysql = require('mysql');
const app = express();

//Db Connection

const db = mysql.createConnection({
    host: 'd121755.mysql.zonevs.eu',
    user: 'd121755_ervin',
    password: 'MustMees123',
    database: 'd121755_vocotoo',
});

app.get('/', (req, res) => {
    console.log("Connected")
});


app.listen(3000, () => {
    console.log('Listening on port 3000');
})