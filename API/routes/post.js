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
const express = require("express");
const post_get_1 = __importDefault(require("../controllers/post/post.get"));
const post_getById_1 = __importDefault(require("../controllers/post/post.getById"));
const multer = require("multer");
const path = require("path");
const image_upload_1 = __importDefault(require("../models/image/image.upload"));
const post_create_model_1 = __importDefault(require("../models/post/post.create.model"));
const router = express.Router();
router.use(express.json());
// MIDDLEWARE FOR IMAGE UPLOADING
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const dir = path.join(__dirname, '../images');
        console.log('Saving file to', dir);
        cb(null, dir);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1000000,
    },
    fileFilter(req, file, cb) {
        if (file.mimetype.startsWith('image/')) {
            cb(null, true);
        }
        else {
            cb(new Error('File type not allowed. Only images are allowed.'));
        }
    }
});
router.get('/get', post_get_1.default.getPost);
router.get('/:id', post_getById_1.default.getPostById);
router.post('/create', upload.single('image'), (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    try {
        const image = new image_upload_1.default({
            image: ((_a = req.file) === null || _a === void 0 ? void 0 : _a.filename) || "default.jpg"
        });
        console.log(image);
        image_upload_1.default.uploadNewImage(image, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Image Internal server issue" });
            }
            if (data) {
                const imageId = data.id;
                console.log(imageId);
                const post = new post_create_model_1.default({
                    title: req.body.title,
                    body: req.body.body,
                    author_id: req.body.author_id,
                    image_id: imageId || 0
                });
                post_create_model_1.default.createNewPost(post, (err, data) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Post Internal server issue" });
                    }
                    if (data) {
                        console.log(data);
                    }
                });
            }
            ;
        });
    }
    catch (error) {
        console.log(error);
    }
}));
exports.default = router;
