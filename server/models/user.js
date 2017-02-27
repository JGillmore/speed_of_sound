var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    first: String,
    last: String,
    user: {type: String, unique:true, required:true}
  },
  email: {type: String, unique:true, required:true},
  password: {type: String, required:true},
  pic: String,
},{
  timestamps:true
});

mongoose.model("User", UserSchema);
