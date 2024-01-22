import express = require('express');
import getController from '../controllers/post/post.get';
import getByIdController from '../controllers/post/post.getById';
import multer = require('multer');
import path = require('path');
import Image from '../models/image/image.upload';
import Post from '../models/post/post.create.model';
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


const upload = multer(
    {
        storage: storage,
        limits: {
            fileSize: 1000000,
        },
        fileFilter(req, file, cb) {
            if (file.mimetype.startsWith('image/')) {
                cb(null, true);
            } else {
                cb(new Error('File type not allowed. Only images are allowed.'));
            }
        }
    })


router.get('/get', getController.getPost);
router.get('/:id', getByIdController.getPostById);
router.post('/create', upload.single('image'), async (req, res, next) => {
    try {
        const image = new Image({
            image: req.file?.filename || "default.jpg"
        });

        console.log(image)

        Image.uploadNewImage(image, (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ error: "Image Internal server issue" });
            }
            if (data) {
                const imageId = data.id;
                console.log(imageId)
                const post = new Post({
                    title: req.body.title,
                    body: req.body.body,
                    author_id: req.body.author_id,
                    image_id: imageId || 0
                });

                Post.createNewPost(post, (err, data) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ error: "Post Internal server issue" });
                    }
                    if (data) {
                        console.log(data);
                    }
                })
            };
        });
    } catch (error) {
        console.log(error);
    }
});

export default router;