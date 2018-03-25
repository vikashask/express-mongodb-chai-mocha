let mongoose = require('mongoose');
let User = require('../models/user');

/*
 * GET /User route to retrieve all the Users.
 */
function getUsers(req, res) {
    //Query the DB and if no errors, send all the Users
    let query = User.find({});
    query.exec((err, Users) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(Users);
    });
}

module.exports = { getUsers };


