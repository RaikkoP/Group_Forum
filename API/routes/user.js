"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const router = express.Router();
const body_parser_1 = __importDefault(require("body-parser"));
router.use(body_parser_1.default.text());
const user_1 = __importDefault(require("../controllers/user"));
router.post('/register', user_1.default.registerUser);
router.get('/register', user_1.default.showRegistration);
router.get('/login', user_1.default.showLogin);
router.get('/home', user_1.default.getForum);
router.post('/login', user_1.default.loginUser);
router.post('/', user_1.default.registerUser);
exports.default = router;
