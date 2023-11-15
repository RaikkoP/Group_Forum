//require environment file
import dotenv from 'dotenv';

dotenv.config();
//create regular expressions for username and password
const userRegEx: RegExp = new RegExp(process.env.USER_REGEX || "");
const passwordRegEx: RegExp = new RegExp(process.env.PASSWORD_REGEX || "");

//export regular expressions
export default  {
    userRegEx,
    passwordRegEx
}