var mongoose = require('mongoose');
require('dotenv').config();
var util = require('util');

// Set database vars
var db_user = process.env["database-user"];
var db_pass = process.env["database-password"];
var db_host_name = process.env["database-host-name"];
var db_port = process.env["database-port"];
var db_name = process.env["database-name"];

const DB_CONFIG = util.format('mongodb://%s:%s@%s:%s/%s', db_user, db_pass, db_host_name, db_port, db_name);

mongoose.connect(DB_CONFIG, {useNewUrlParser: true}, (err) => {
    console.log('mongodb connected', err);
})

const users = mongoose.model('users',{
    name: String
});

var newUser = new users({name:'Bob Esponja'});
newUser.save();

module.exports = { users };
