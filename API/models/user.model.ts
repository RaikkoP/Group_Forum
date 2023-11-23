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

  constructor({ username, password, email, id }: UserInterface) {
    this.username = username;
    this.password = password;
    this.email = email;
  }

  static login(user: UserInterface, result: (error: ErrorInterface | string | null,data: UserInterface | null) => void) {
    //Check inputs with regex
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

  static register(user: UserInterface, result: (error: MysqlError | string | null, data: UserInterface | null) => void) {
    //Check inputs with regex
    if (!passRegex(user.username, user.password)) {
      result("Failed to login", null)
      return;
    }
    //Username check
    //Check if username or email exists in db
    db.query('SELECT username FROM users WHERE username = ? or email = ?', [user.username, user.email], (err, res) => {
      console.log(res);
      if (res.length > 0) {
        console.log("That username or email is taken");
        result(err, null);
        return;
      }
      if (res == null || undefined) {
        result(err, null);
        return;
      }
      //Add user to database if all is secure and well, save password as HASH NOT NORMAL PASSWORD
      db.query('INSERT INTO users SET username = ?, password = ?, email = ?', [user.username, bcrypt.hashSync(user.password, bcrypt.genSaltSync(10)), user.email], (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }
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
