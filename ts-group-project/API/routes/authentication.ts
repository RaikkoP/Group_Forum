import express = require('express');
import loginController from '../controllers/user/user.login';
import registerController from '../controllers/user/user.register';
const router = express.Router();
router.use(express.json());


router.post('/login', loginController.loginUser);
router.post('/register', registerController.registerUser);
router.get('/userData', function (req: express.Request, res: express.Response) {
    console.log(req.session);
    console.log(req.session.username);
    if (req.session.authorized) {
        return res.json({valid: true, user_info: req.session.username});
    } else {
        return res.json({valid: false});
    }
});

export default router;