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
  followers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}],
  following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User"}]
},{
  timestamps:true
});
module.exports = UserSchema;
mongoose.model("User", UserSchema);
