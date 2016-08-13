process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  express = require('./config/express'),
  passport = require('./config/passport.js');

var db = mongoose();
var app = express(db);
var passport = passport();

const PORT = 80;

app.listen(PORT, function () {
  console.log('Server is up and running at http://localhost:%s/', PORT);
});
module.exports = app;
