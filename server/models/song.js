var mongoose = require('mongoose');
var UserSchema = require('./user.js');
var CommentSchema = require('./comment.js');

var SongSchema = mongoose.Schema({
  title: String,
  pic: String,
  comment: [CommentSchema],
  artist: [UserSchema],
  genre: String,
  url: String
},{
  timestamps:true
});

mongoose.model("Song", SongSchema);
