//Packages
const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');
require('dotenv').config();
const userRegEx = new RegExp(process.env.USER_REGEX);
const passwordRegEx = new RegExp(process.env.PASSWORD_REGEX);

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

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
    console.log("Testing");
    if(userRegEx.test(req.body.username) && passwordRegEx.test(req.body.password)){
        console.log("Poggers")
    } else {
        console.log("Fuck you")
    }
}); 


app.listen(3000, () => {
    console.log('Listening on port 3000');
})