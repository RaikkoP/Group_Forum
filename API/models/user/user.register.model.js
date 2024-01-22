"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const database_1 = __importDefault(require("../../utility/database"));
const bcrypt = require("bcryptjs");
const dotenv = __importStar(require("dotenv"));
dotenv.config();
class User {
    constructor({ username, password, email }) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    static register(user, result) {
        return __awaiter(this, void 0, void 0, function* () {
            //Check inputs with regex
            console.log(user.username, user.password);
            //Username check
            //Check if username or email exists in db
            database_1.default.query('SELECT username FROM users WHERE username = ? or email = ?', [user.username, user.email], (err, res) => {
                if (res.length > 0) {
                    console.log("That username or email is taken");
                    result(err, null);
                    return;
                }
                if (err) {
                    console.log("Error executing select query: ", err);
                }
                console.log("We made it through the first DB");
                //Add user to database if all is secure and well, save password as HASH NOT NORMAL PASSWORD
                const hashedPassword = bcrypt.hash(user.password, bcrypt.genSaltSync(10));
                database_1.default.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [user.username, user.email, hashedPassword], (err, res) => {
                    if (err) {
                        console.log("error: ", err);
                        result(err, null);
                        return;
                    }
                    console.log(res);
                    console.log("Registered new user: ", Object.assign({ id: res.insertId }, user));
                    result(null, Object.assign({ id: res.insertId }, user));
                });
            });
        });
    }
}
exports.default = User;
