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
const user_login_model_1 = __importDefault(require("../../models/user/user.login.model"));
const loginController = {
    loginUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userData = new user_login_model_1.default({
            username: req.body.username,
            password: req.body.password,
        });
        user_login_model_1.default.login(userData, (err, data) => {
            if (err) {
                req.session.authorized = false;
                return res.json({ Login: false });
            }
            if (data) {
                req.session.username = userData.username;
                req.session.authorized = true;
                console.log(req.session.username);
                console.log(req.session.authorized);
                return res.json({ Login: true });
            }
        });
    }),
};
exports.default = loginController;
