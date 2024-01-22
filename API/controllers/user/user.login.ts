import { Response, Request } from 'express';
import User from '../../models/user/user.login.model';


const loginController = {
  loginUser: async (req: Request, res: Response) => {
    const userData = new User({
      username: req.body.username,
      password: req.body.password,
    });
    User.login(userData, (err, data) => {
      if (err) {
        req.session.authorized = false;
        return res.json({ Login: false });
      }
      if (data) {
        req.session.username = userData.username;
        req.session.authorized = true;
        req.session.userId = userData.id?.toString() || "";
        req.session.save((err) => {
          if (err) {
            console.log('Error saving session: ', err);
            return res.json({ Login: false });
          }
          console.log(req.session.username);
          console.log(req.session.authorized);
          return res.json({ Login: true });
        });
      }
    });
  },
};

export default loginController;
