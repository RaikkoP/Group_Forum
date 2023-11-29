"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const express_session_1 = __importDefault(require("express-session"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
//Body parser
app.use(express_1.default.json());
// Cross origin setup
app.use((0, cors_1.default)({
    origin: 'http://localhost:5173',
    credentials: true,
}));
//Session setup
//ADD NEW SESSION
app.use((0, express_session_1.default)({
    secret: process.env.SECRET_KEYS || "secret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}));
// Import routes 
// import userRoutes from './routes/user';
const authentication_1 = __importDefault(require("./routes/authentication"));
// Route setup
// app.use('/', userRoutes);
app.use('/authentication', authentication_1.default);
app.listen(4000, () => {
    console.log("Listening on port 4000");
});
