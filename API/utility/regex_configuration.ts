//require environment file
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();

//create regular expressions for username and password
const userRegEx: RegExp = new RegExp(process.env.USERNAME_REGEX || "");
const passwordRegEx: RegExp = new RegExp(process.env.PASSWORD_REGEX || "");

//export regular expressions
export default  {
    userRegEx,
    passwordRegEx
}