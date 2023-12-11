"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const user_login_1 = __importDefault(require("../controllers/user/user.login"));
const user_register_1 = __importDefault(require("../controllers/user/user.register"));
const router = express.Router();
router.use(express.json());
router.post('/login', user_login_1.default.loginUser);
router.post('/register', user_register_1.default.registerUser);
router.get('/userData', function (req, res) {
    console.log(req.session);
    console.log(req.session.username);
    if (req.session.authorized) {
        return res.json({ valid: true, user_info: req.session.username });
    }
    else {
        return res.json({ valid: false });
    }
});
exports.default = router;
