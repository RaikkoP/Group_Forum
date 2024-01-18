import express = require('express');
import getController from '../controllers/post/post.get';
const router = express.Router();
router.use(express.json());

router.post('/create', getController.getPost);

export default router;