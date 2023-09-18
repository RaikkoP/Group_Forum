//Packages
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');
require('dotenv').config();

//body parser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('cors');

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

app.post('/test', (req, res) => {
    if(process.env.USER_REGEX.test(req.body.username)){
        console.log("Poggers")
    } else {
        console.log("Fuck you")
    }
}); 


app.listen(3000, () => {
    console.log('Listening on port 3000');
})