const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');

router.post('/', userController.registerUser);
router.get('/register',userController.showRegistration)
router.get('/login',userController.showLogin)
router.get('/home',userController.getForum)


module.exports = router;