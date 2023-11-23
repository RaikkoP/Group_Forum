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
const regex_check_1 = __importDefault(require("../utility/regex_check"));
const bcrypt = require("bcryptjs");
class User {
    constructor({ username, password, email, id }) {
        this.username = username;
        this.password = password;
        this.email = email;
    }
    static login(user, result) {
        //Check inputs with regex
        console.log(user.username, user.password);
        if (!(0, regex_check_1.default)(user.username, user.password)) {
            result("Failed to login", null);
            return;
        }
        //See if user with this username exists
        database_1.default.query('SELECT * FROM users WHERE username = ?', [user.username], (err, res) => __awaiter(this, void 0, void 0, function* () {
            if (res.length == 0 || res == null || undefined) {
                result(err, res);
                return;
            }
            yield bcrypt.compare(user.password, res[0].password);
            {
                if (err) {
                    result(err, res);
                    return;
                }
                result(null, Object.assign({ id: res.insertId }, user));
            }
        }));
    }
}
exports.default = User;
