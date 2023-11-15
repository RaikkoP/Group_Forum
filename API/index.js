"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const regex_configuration_1 = __importDefault(require("./utility/regex_configuration"));
require("dotenv").config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
//Session setup
//ADD NEW SESSION WITH JWT
app.get("/", (req, res) => {
    console.log("Connected");
    res.send("Hello, World!");
});
//regex test
app.post("/test", (req, res) => {
    console.log("Testing");
    if (regex_configuration_1.default.userRegEx.test(req.body.username) &&
        regex_configuration_1.default.passwordRegEx.test(req.body.password)) {
        console.log("Test username and password are valid");
    }
    else {
        console.log("Test username and/or password are invalid");
    }
});
// //routes
// import userRoutes from './routes/user';
// //route setup
// app.use('/', userRoutes);
app.listen(4000, () => {
    console.log("Listening on port 4000");
});
