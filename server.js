var express = require('express');
var app = express();
const os = require('os');
app.get('/', function (req, res) {
res.send(`Hello World!\n<h3>HOST: ${os.hostname()}</h3>`);
});
app.listen(3000, function () {
console.log('Example app listening on port 3000!');
});
