import { MysqlError } from "mysql";
import db from "../utility/database";
import passRegex from "../utility/regex_check";
import bcrypt = require("bcryptjs");

interface UserInterface {
  username: string;
  password: string;
  email?: string;
  id?: number;
}

interface ErrorInterface {
  message: string | MysqlError ;
}

class User {
  username: string;
  password: string;
  email: string | undefined;

  constructor({ username, password, email}: UserInterface) {
    this.username = username;
    this.password = password;
    this.email = email;
  }
  static login(user: UserInterface, result: (error: ErrorInterface | string | null,data: UserInterface | null) => void) {
    //Check inputs with regex
    console.log(user.username, user.password);
    if (!passRegex(user.username, user.password)) {
      result("Failed to login", null)
      return;
    }
    //See if user with this username exists
    db.query('SELECT * FROM users WHERE username = ?', [user.username], async (err, res) => {
      if (res.length == 0 || res == null || undefined) {
        result(err, res);
        return;
      }
      await bcrypt.compare(user.password, res[0].password)
       {
        if (err) {
          result(err, res);
          return;
        }
        result(null, { id: res.insertId, ...user });
      }});
  }
}

export default User;
