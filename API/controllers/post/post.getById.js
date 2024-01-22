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
const post_getById_model_1 = __importDefault(require("../../models/post/post.getById.model"));
const getByIdController = {
    getPostById: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const postData = new post_getById_model_1.default({
            id: req.body.id,
            title: req.body.id,
            slug: req.body.slug,
            body: req.body.body,
            published: req.body.published,
            image_id: req.body.image_id,
            image: req.body.image,
            author_id: req.body.author_id,
            author: req.body.author,
        });
        post_getById_model_1.default.getPostById(postData, (err, data) => {
            if (err) {
                res.json({ Found: false });
                throw err;
            }
            if (data) {
                res.json({ Found: true });
                return data;
            }
        });
    }),
};
exports.default = getByIdController;
