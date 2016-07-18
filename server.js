process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./config/express');

var app = express();

const hostname = 'localhost';
const port = 3000;

app.listen(port, hostname);
module.exports = app;

console.log('Server running at http://${hostname}:${port}/');
