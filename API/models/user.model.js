"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../utility/database"));
const regex_configuration_1 = __importDefault(require("../utility/regex_configuration"));
const bcrypt = require("bcryptjs");
class User {
    constructor({ username, password, email, id }) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    static login(user, result) {
        //Check inputs with regex
        if (!regex_configuration_1.default.userRegEx.test(user.username) &&
            !regex_configuration_1.default.passwordRegEx.test(user.password)) {
            result("Failed to login", null);
            return;
        }
        //See if user with this username exists
        let queryFindUser = `SELECT * FROM users WHERE
  username = '${user.username}'`;
        //SQL COMMAND
        database_1.default.query(queryFindUser, (err, res) => __awaiter(this, void 0, void 0, function* () {
            if (res.length == 0) {
                result(err, res);
                return;
            }
            if (res.length > 0 &&
                (yield bcrypt.compare(user.password, res[0].password))) {
                if (err) {
                    result(err, res);
                    return;
                }
                result(null, Object.assign({ id: res.insertId }, user));
            }
        }));
    }
    static register(user, result) {
        //Check inputs with regex
        if (!regex_configuration_1.default.userRegEx.test(user.username) &&
            !regex_configuration_1.default.passwordRegEx.test(user.password)) {
            result("Nope haha", null);
            return;
        }
        //Check if username or email exists in db
        let queryCheckUsername = `SELECT username FROM users
WHERE username = '${user.username}' or email = '${user.email}'`;
        //Add user to database if all is secure and well, save password as HASH NOT NORMAL PASSWORD
        let queryAddUser = `INSERT INTO users SET
username = '${user.username}',
password = '${bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))}',
email = '${user.email}'`;
        //Username check
        database_1.default.query(queryCheckUsername, (err, res) => {
            console.log(res);
            if (res.length > 0) {
                console.log("That username or email is taken");
                result(err, null);
                return;
            }
            database_1.default.query(queryAddUser, (err, res) => {
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
