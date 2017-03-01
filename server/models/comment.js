var mongoose = require('mongoose');
var UserSchema = require('./user.js');

var CommentSchema = mongoose.Schema({
  comments: [this],
  user: [UserSchema]
},{
  timestamps:true
});

module.exports = CommentSchema;
mongoose.model("Comment", CommentSchema);
