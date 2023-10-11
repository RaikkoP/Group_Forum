const User = require("../models/users.model");


module.exports = {

    showRegistration:(req, res) => {
                res.render('register')
    },

    loginUser: async (req, res) => {
        const userData = new User({
            username: req.body.username,
            password: req.body.password,
        })

        User.login(userData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Error loging in"
                })
            } else {
                req.session.authenticated = true;
                console.log(data.username);
                console.log(data.password);
            }
        })
    },

    registerUser: async (req, res) => {
        const userData = new User({
            username: req.body.username,
            password: req.body.password,
            email: req.body.email
        })
    
        User.registerNew(userData, (err, data) => {
            if (err) {
                res.status(500).send({
                    message: err.message || "Error making new account"
                })
            } else {
                req.session.authenticated = true;
                console.log(data);
            }
        })

    },
    showLogin: (req,res)=>{
        res.render('login')
    },
    getForum: (req,res)=>{
        res.render('home')

    }
}