import express = require('express');
const router = express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.text());
import loginController from '../controllers/user.login';

router.post('/', loginController.loginUser);


export default router;