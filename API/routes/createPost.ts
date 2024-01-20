import express = require('express');
import createController from '../controllers/post/post.create';
const router = express.Router();
router.use(express.json());

router.post('/create', createController.createPost);

export default router;