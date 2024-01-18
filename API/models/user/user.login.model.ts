import { MysqlError } from "mysql";
import db from "../../utility/database";
import bcrypt = require("bcryptjs");
import regexConfig from '../../utility/regex_configuration';

type UserInterface = {
  username: string;
  password: string;
  email?: string;
  id?: number;
}
type ErrorInterface = {
  message: string | MysqlError;
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
  static login(user: UserInterface, result: (error: ErrorInterface | string | null, data: UserInterface | null) => void) {
    //Check inputs with regex
    console.log(user.username, user.password);
    if (!regexConfig.userRegEx.test(user.username) || !regexConfig.passwordRegEx.test(user.password)) {
      result("Failed to login", null);
      console.log('Failed to login')
      return;
    }
    //See if user with this username exists
    db.query('SELECT * FROM users WHERE username = ?', [user.username], async (err, res) => {
      if (res.length == 0 || res == null || undefined) {
        result("No user with username found", res);
        console.log('No user found')
        return;
      }
      await bcrypt.compare(user.password, res[0].password)
        .then(response => {
          if (response) {
            result(null, { id: res.insertId, ...user });
          } else {
            console.log('Wrong password')
            result("Incorrect Password", res);
            return;
          }
        })
        .catch(error => {
          console.log("Error comparing passwords:", error);
          result("Internal server Issue", null);
        })
    });
  }
}

export default User;
