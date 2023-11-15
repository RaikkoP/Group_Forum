"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//require environment file
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//create regular expressions for username and password
const userRegEx = new RegExp(process.env.USER_REGEX || "");
const passwordRegEx = new RegExp(process.env.PASSWORD_REGEX || "");
//export regular expressions
exports.default = {
    userRegEx,
    passwordRegEx
};
