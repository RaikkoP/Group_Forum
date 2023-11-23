import express = require('express');
const router = express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.json());
import userController from '../controllers/user';

router.post('/', userController.registerUser);


export default router;