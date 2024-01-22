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
const post_get_model_1 = __importDefault(require("../../models/post/post.get.model"));
const getController = {
    getPost: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const postData = new post_get_model_1.default({
            id: req.body.id,
            title: req.body.id,
            body: req.body.body,
            image: req.body.image,
            author_id: req.body.author_id,
            author: req.body.author,
        });
        post_get_model_1.default.getAllPosts(postData, (err, data) => {
            if (err) {
                console.log(err);
                res.json({ Found: false });
                throw err;
            }
            if (data) {
                console.log(data);
                res.json(data);
                return data;
            }
        });
    }),
};
exports.default = getController;
