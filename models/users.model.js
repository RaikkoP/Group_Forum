const con = require("../utility/database");
const regex = require("../utility/regex_configuration");
const bcrypt = require('bcryptjs');

const User = function(user){
  this.username = user.username;
  this.email = user.email;
  this.password = user.password;
};

User.registerNew = (user, result) => {
    //Check inputs with regex
  if (
    regex.userRegEx.test(user.username) &&
    regex.passwordRegEx.test(user.password)
  ) {
    //Check if username or email exists in db
    let queryCheckUsername = `SELECT username FROM users
        WHERE username = '${user.username}' or email = '${user.email}'`;
    //Add user to database if all is secure and well, save password as HASH NOT NORMAL PASSWORD
    let queryAddUser = `INSERT INTO users SET
        username = '${user.username}',
        password = '${bcrypt.hashSync(user.password, bcrypt.genSaltSync(10))}',
        email = '${user.email}'`;
    //Username check
    con.query(queryCheckUsername, (err, res) => {
      if (res.length > 0) {
        console.log("That username or email is taken");
        result(err, null);
        return;
      } else {
        con.query(queryAddUser, (err, res) => {
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
      }
    });
    //If regex fails send error code and null data
  } else {
    result(200, null);
  }
};

module.exports = User;