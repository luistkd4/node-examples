var express = require('express');
const { users } = require ('./settings')

// routes
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

// create user
app.get('/create', function(req,res){
  var newUser = new users({name:'Bob Esponja'});
  newUser.save();
  res.send('Bob Esponja\'s user created');
})

//list users
app.get('/users', function(req,res) {
    users.find({}, function (err, users){
        res.send(users);
    });
});

//start server
app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});