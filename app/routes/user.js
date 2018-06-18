let mongoose = require('mongoose');
let User = require('../models/user');

/*
 * GET /User route to retrieve all the Users.
 */
function getUsers(req, res) {
    //Query the DB and if no errors, send all the Users
    let query = User.find({});
    query.exec((err, Users) => {
        if (err) res.send(err);
        //If no errors, send them back to the client
        res.json(Users);
    });
}

/*
 * POST /book to save a new book.
 */
function postUser(req, res) {
    // create new user
    let newUser = new User(req.body);
    // save it into DB
    newUser.save(
        (err, user) => {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    message: "User addd!",
                    user
                });
            }
        }
    );
}

/*
 * POST /book to save a new book.
 */
function login(req, res) {
console.log(req.body,'login data---');
    User.find({email:req.body.email,password:req.body.password},(function(error,data){
        res.json(data);
    }));
}

function register(req, res) {
    // create new user
    let newUser = new User(req.body);
    // save it into DB
    newUser.save(
        (err, user) => {
            if (err) {
                res.send(err);
            } else {
                res.send({
                    message: "User addd!",
                    user
                });
            }
        }
    );
}

module.exports = {
    getUsers,
    login,
    register,
    postUser
};