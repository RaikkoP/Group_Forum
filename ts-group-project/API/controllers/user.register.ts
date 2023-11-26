import { Request, Response } from 'express';
import User from '../models/user.register.model';


const userController = {
  registerUser: async (req: Request, res: Response) => {
    console.log(req.body, "From registerUser");
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
        //Create SessionID and make session cookie!
        console.log(data);
      }
    });
  },
};

export default userController;
