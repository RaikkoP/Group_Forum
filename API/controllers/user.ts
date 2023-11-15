import { BodyParser } from 'body-parser';
import { Request, Response } from 'express';
import User from '../models/user.model';

interface UserInterface {
  username: string;
  password: string;
  email?: string;
  id?: number;
}

const userController = {
   showRegistration: (req: Request, res: Response) => {},

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

   registerUser: async (req: Request, res: Response) => {
    const userData = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    User.register(userData, (err, data) => {
      if (err) {
        res.status(500).send({
          message: "Error making new account",
        });
      } else {
        console.log(data);
      }
    });
  },
  showLogin: () => console.log("showLogin"),
  getForum: () => console.log("getForum"),
};

export default userController;
