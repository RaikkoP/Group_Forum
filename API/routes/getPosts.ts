import express = require('express');
import getController from '../controllers/post/post.get';
import getByIdController from '../controllers/post/post.getById';
const router = express.Router();
router.use(express.json());

router.get('/posts', getController.getPost);
router.get('/posts/:id', getByIdController.getPostById);

export default router;