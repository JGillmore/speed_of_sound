var mongoose = require('mongoose');
var UserSchema = require('./user.js');
var CommentSchema = require('./comment.js');

var SongSchema = mongoose.Schema({
  title: String,
  pic: String,
  comments: [CommentSchema],
  artist: String,
  genre: String,
  url: String,
  id: String
},{
  timestamps:true
});

module.exports = SongSchema;
mongoose.model("Song", SongSchema);
