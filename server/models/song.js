var mongoose = require('mongoose');
var UserSchema = require('./user.js');
var CommentSchema = require('./comment.js');

var SongSchema = mongoose.Schema({
  song_name: String,
  pic: String,
  comment: [CommentSchema],
  user: [UserSchema],
  genre: String
},{
  timestamps:true
});

mongoose.model("Song", SongSchema);
