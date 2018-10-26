var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.contentType('application/json');
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000);
console.log('Listening on port 3000...');

