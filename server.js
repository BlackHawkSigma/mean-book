process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('./config/mongoose'),
  express = require('./config/express'),
  passport = require('./config/passport.js');

var db = mongoose();
var app = express();
var passport = passport();

const PORT = 3000;

app.listen(PORT, function () {
  console.log('Express is up and running at http://localhost:%s/', PORT);
});
module.exports = app;
