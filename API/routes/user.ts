import express = require('express');
const router = express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.text());
import loginController from '../controllers/user.login';
import registerController from '../controllers/user.register';


router.post('/login', loginController.loginUser);
router.post('/', registerController.registerUser);



export default router;