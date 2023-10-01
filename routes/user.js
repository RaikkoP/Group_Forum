const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');


router.post('/register', userController.registerUser);
router.get('/register',userController.showRegistration)
router.get('/login',userController.showLogin)
router.get('/home',userController.getForum)

router.post('/', userController.registerUser);




module.exports = router;