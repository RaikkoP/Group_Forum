import express = require('express');
import getController from '../controllers/post/post.get';
const router = express.Router();
router.use(express.json());

router.get('/posts', getController.getPost);

export default router;