import express = require('express');
const router = express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.text());
import userController from '../controllers/user';

router.post('/login', userController.loginUser);
router.post('/', userController.registerUser);



export default router;