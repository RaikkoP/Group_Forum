"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const body_parser_1 = __importDefault(require("body-parser"));
router.use(body_parser_1.default.text());
const user_login_1 = __importDefault(require("../controllers/user.login"));
const user_register_1 = __importDefault(require("../controllers/user.register"));
router.post('/login', user_login_1.default.loginUser);
router.post('/', user_register_1.default.registerUser);
exports.default = router;
