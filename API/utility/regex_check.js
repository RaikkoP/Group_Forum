"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const regex_configuration_1 = __importDefault(require("../utility/regex_configuration"));
function passRegex(username, password) {
    if (!regex_configuration_1.default.userRegEx.test(username) ||
        !regex_configuration_1.default.passwordRegEx.test(password)) {
        return false;
    }
}
exports.default = passRegex;
