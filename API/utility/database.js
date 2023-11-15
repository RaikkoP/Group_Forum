"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//require mysql
const mysql = require("mysql");
//require environment file
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
//Database connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
});
db.connect((err) => {
    if (err)
        throw err;
    console.log("Connected");
});
//export db
exports.default = db;
