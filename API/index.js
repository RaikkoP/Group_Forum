"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
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
// //routes
// import userRoutes from './routes/user';
const register_1 = __importDefault(require("./routes/register"));
// //route setup
// app.use('/', userRoutes);
app.use('/register', register_1.default);
app.listen(4000, () => {
    console.log("Listening on port 4000");
});
