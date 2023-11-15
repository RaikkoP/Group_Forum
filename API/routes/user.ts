import express = require('express');
const router = express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.text());
import userController from '../controllers/user';


router.post('/register', userController.registerUser);
router.get('/register',userController.showRegistration);
router.get('/login',userController.showLogin);
router.get('/home',userController.getForum);
router.post('/login',userController.loginUser);
router.post('/', userController.registerUser);



export default router;