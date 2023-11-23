import express = require('express');
const router = express.Router();
import bodyParser from 'body-parser';
router.use(bodyParser.json());
import registerController from '../controllers/user.register';

router.post('/', registerController.registerUser);


export default router;