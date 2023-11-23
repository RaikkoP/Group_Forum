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
const user_model_1 = __importDefault(require("../models/user.model"));
const userController = {
    loginUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userData = new user_model_1.default({
            username: req.body.username,
            password: req.body.password,
        });
        user_model_1.default.login(userData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error loging in",
                });
            }
            if (data) {
                console.log(data.username);
                console.log(data.password);
            }
        });
    }),
    registerUser: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log(req.body, "From registerUser");
        const userData = new user_model_1.default({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email,
        });
        user_model_1.default.register(userData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: "Error making new account",
                });
            }
            else {
                console.log(data);
            }
        });
    }),
};
exports.default = userController;
