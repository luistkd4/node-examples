var mongoose = require('mongoose');
require('dotenv').config();
var util = require('util');

// Set database vars
var db_user = process.env.DATABASE_USER;
var db_pass = process.env.DATABASE_PASSWORD;
var db_host_name = process.env.DATABASE_HOST_NAME;
var db_port = process.env.DATABASE_PORT;
var db_name = process.env.DATABASE_NAME;

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
