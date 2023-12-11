"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../../utility/database"));
const bcrypt = require("bcryptjs");
class User {
    constructor({ username, password, email }) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    static register(user, result) {
        //Check inputs with regex
        console.log(user.username, user.password);
        // if(!regex.userRegEx.test(user.username) || !regex.passwordRegEx.test(user.password)){
        //   result("Failed to login", null);
        //   return;
        // }
        //Username check
        //Check if username or email exists in db
        database_1.default.query('SELECT username FROM users WHERE username = ? or email = ?', [user.username, user.email], (err, res) => {
            console.log(res);
            if (res.length > 0) {
                console.log("That username or email is taken");
                result(err, null);
                return;
            }
            if (res == null || undefined) {
                result(err, null);
                return;
            }
            console.log("We made it through the first DB");
            //Add user to database if all is secure and well, save password as HASH NOT NORMAL PASSWORD
            database_1.default.query('INSERT INTO users SET username = ?, password = ?, email = ?', [user.username, bcrypt.hashSync(user.password, bcrypt.genSaltSync(10)), user.email], (err, res) => {
                if (err) {
                    console.log("error: ", err);
                    result(err, null);
                    return;
                }
                console.log("Registered new user: ", Object.assign({ id: res.insertId }, user));
                result(null, Object.assign({ id: res.insertId }, user));
            });
        });
    }
}
exports.default = User;
