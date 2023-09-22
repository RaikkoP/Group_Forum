//require environment file
require('dotenv').config();

//create regular expressions for username and password
const userRegEx = new RegExp(process.env.USER_REGEX);
const passwordRegEx = new RegExp(process.env.PASSWORD_REGEX);

//export regular expressions
module.exports = {
    userRegEx,
    passwordRegEx
}