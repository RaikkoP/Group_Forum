import { MysqlError } from "mysql";
import db from "../utility/database";
import regex from "../utility/regex_configuration";
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

  static login(
    user: UserInterface,
    result: (
      error: ErrorInterface | string | null,
      data: UserInterface | null
    ) => void
  ) {
    //Check inputs with regex
    if (
      !regex.userRegEx.test(user.username) &&
      !regex.passwordRegEx.test(user.password)
    ) {
      result("Failed to login", null);
      return;
    }

    //See if user with this username exists
    let queryFindUser = `SELECT * FROM users WHERE
  username = '${user.username}'`;
    //SQL COMMAND
    db.query(queryFindUser, async (err, res) => {
      if (res.length == 0) {
        result(err, res);
        return;
      }
      if (
        res.length > 0 &&
        (await bcrypt.compare(user.password, res[0].password))
      ) {
        if (err) {
          result(err, res);
          return;
        }
        result(null, { id: res.insertId, ...user });
      }
    });
  }

  static register(user: UserInterface, result: (error: MysqlError | string | null, data: UserInterface | null) => void) {
    //Check inputs with regex
    if (
      !regex.userRegEx.test(user.username) &&
      !regex.passwordRegEx.test(user.password)
    ) {
      result("Nope haha", null);
      return;
    }
    //Check if username or email exists in db
    let queryCheckUsername = `SELECT username FROM users
WHERE username = '${user.username}' or email = '${user.email}'`;
    //Add user to database if all is secure and well, save password as HASH NOT NORMAL PASSWORD
    let queryAddUser = `INSERT INTO users SET
username = '${user.username}',
password = '${bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))}',
email = '${user.email}'`;
    //Username check
    db.query(queryCheckUsername, (err, res) => {
      console.log(res);
      if (res.length > 0) {
        console.log("That username or email is taken");
        result(err, null);
        return;
      }
      db.query(queryAddUser, (err, res) => {
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
