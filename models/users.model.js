const con = require('../utility/database');

const User = function(User) {
    this.username = users.username
    this.email = users.email
    this.password = users.password
};

User.registerNew = (newUser, result) => {
    let queryCheckUsername = `SELECT username FROM users
                              WHERE username = '${newUser.username}'`
    let queryAddUser = `INSERT INTO users SET
                 username = '${newUser.username}',
                 password = '${newUser.password}'`
    con.query(queryCheckUsername, (err, res) => {
        if (res.length > 0) {
            console.log('That username is taken')
            result(err, null);
            return;
        } else {
            con.query(queryAddUser, (err, res) => {
                if(err) {
                    console.log('error: ', err);
                    result(err, null);
                    return;
                }
                console.log("Registered new user: ", {id: res.insertId, ...newUser});
                result(null, {id: res.insertId, ...newUser})
            })
        }
    })
};