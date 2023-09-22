//Packages
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const hbs = require('express-handlebars');
require('dotenv').config();
const regex = require('./utility/regex_configuration');


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


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


app.listen(3000, () => {
    console.log('Listening on port 3000');
})