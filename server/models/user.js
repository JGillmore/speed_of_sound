var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    first: String,
    last: String,
    user: {type: String, required:true}
  },
  email: {type: String, required:true},
  password: {type: String, required:true},
  pic: String,
  followers: [String],
  following: [String]
},{
  timestamps:true
});
module.exports = UserSchema;
mongoose.model("User", UserSchema);
