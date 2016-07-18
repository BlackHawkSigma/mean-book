process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  express = require('./config/express');

var db = mongoose();
var app = express();

const hostname = 'localhost';
const port = 3000;

var server = app.listen(port, hostname, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Express is up and running at http://%s:%s/', host, port);
});
module.exports = app;

// console.log('Server running at http://' + hostname + ':' + port + '/');
