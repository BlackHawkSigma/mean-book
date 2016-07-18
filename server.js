process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  express = require('./config/express');

var db = mongoose();
var app = express();

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname);
module.exports = app;

console.log('Server running at http://${hostname}:${port}/');
