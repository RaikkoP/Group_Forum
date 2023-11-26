import { Request, Response } from 'express';
import User from '../models/user.login.model';

const userController = {
  loginUser: async (req: Request, res: Response) => {
    const userData = new User({
      username: req.body.username,
      password: req.body.password,
    });
    User.login(userData, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Error loging in",
        });
      }
      if (data) {
        console.log(data.username);
        console.log(data.password);
      }
    });
  },
};

export default userController;
