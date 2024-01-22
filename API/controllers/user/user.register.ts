import { Request, Response } from 'express';
import User from '../../models/user/user.register.model';


const registerController = {
  registerUser: async (req: Request, res: Response) => {
    console.log(req.body, "From registerUser");
    const userData = new User({
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    });

    User.register(userData, (err, data) => {
      if (err) {
        console.log("Register failed")
        res.json({Registered: false})
      } 
      if (data) {
        console.log("Register success")
        res.json({Registered: true})
      }
    });
  },
};

export default registerController;
