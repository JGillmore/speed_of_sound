var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: {
    first: String,
    last: String
  }
},{
  timestamps:true
});

mongoose.model("User", UserSchema);
