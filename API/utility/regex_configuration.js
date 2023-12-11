"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//require environment file
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
//create regular expressions for username and password
const userRegEx = new RegExp(process.env.USERNAME_REGEX || "");
const passwordRegEx = new RegExp(process.env.PASSWORD_REGEX || "");
//export regular expressions
exports.default = {
    userRegEx,
    passwordRegEx
};
