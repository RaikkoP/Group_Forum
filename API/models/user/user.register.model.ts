import { MysqlError } from "mysql";
import db from "../../utility/database";
import bcrypt = require("bcryptjs");
import regexConfig from '../../utility/regex_configuration';
import * as dotenv from 'dotenv';
dotenv.config();


type UserInterface = {
  username: string;
  password: string;
  email?: string;
  id?: number;
}

class User {
  username: string;
  password: string;
  email: string | undefined;

  constructor({ username, password, email }: UserInterface) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
  static async register(user: UserInterface, result: (error: MysqlError | string | null, data: UserInterface | null) => void) {
    //Check inputs with regex
    console.log(user.username, user.password);
   

    //Username check
    //Check if username or email exists in db
    db.query('SELECT username FROM users WHERE username = ? or email = ?', [user.username, user.email], (err, res) => {
      if (res.length > 0) {
        console.log("That username or email is taken");
        result(err, null);
        return;
      }
      if (err) {
        console.log("Error executing select query: ", err);
      }
      console.log("We made it through the first DB")
      //Add user to database if all is secure and well, save password as HASH NOT NORMAL PASSWORD
      const hashedPassword = bcrypt.hash(user.password, bcrypt.genSaltSync(10))
      db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)', [user.username, user.email, hashedPassword], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        console.log(res);

        console.log("Registered new user: ", {
          id: res.insertId,
          ...user,
        });
        result(null, { id: res.insertId, ...user });
      });
    });
  }
}

export default User;
