//Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const app = express();
const hbs = require('express-handlebars');
require('dotenv').config();
const regex = require('./utility/regex_configuration');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//Session setup
app.use(session({
    //Secret should periodically change and genSalySync makes a random salt every page reload
    secret: bcrypt.genSaltSync(10),
    cookie: {
        maxAge: 30000,
        sameSite: 'strict'
    },
    //If user is not logged in we don't want to save the token
    saveUninitialized: false
}));


app.get('/', (req, res) => {
    console.log("Connected")
});

//regex test
app.post('/test', (req, res) => {
    console.log("Testing");
    if(regex.userRegEx.test(req.body.username) && regex.passwordRegEx.test(req.body.password)){
        console.log("Test username and password are valid")
    } else {
        console.log("Test username and/or password are invalid")
    }
}); 

//routes

const userRoutes = require('./routes/user');

//route setup
app.use('/', userRoutes);

app.listen(3000, () => {
    console.log('Listening on port 3000');
})