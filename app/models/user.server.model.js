var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var UserSchema = new Schema( {
  firstName: String,
  lastName: String,
  email: {
    type: String,
    index: true
  },
  username: {
    type: String,
    trim: true,
    unique: true
  },
  password: String,
  website: {
    type: String,
    get: function(url) {
      if (!url) {
        return url;
      } else {
        if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
          url = 'http://' + url;
        }

        return url;
      }
    }
  },
  created: {
    type: Date,
    default: Date.now
  }
});

UserSchema.virtual('fullName').get(function() {
  return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
  var splitName = fullName.split(' ');
  this.firstName = splitName[0] || '';
  this.lastName = splitName[1] || '';
});

UserSchema.set('toJSON', { getters: true, virtuals: true });

UserSchema.statics.findOneByUsername = function(username, callback) {
  thhis.findOne({ username: new RegExp(username, 'i') }, callback);
};

mongoose.model('User', UserSchema);
