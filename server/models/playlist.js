var mongoose = require('mongoose');
var SongSchema = require('./song.js');

var PlaylistSchema = mongoose.Schema({
  user: String,
  songs: [SongSchema]
},{
  timestamps:true
});

module.exports = PlaylistSchema;
mongoose.model("Playlist", PlaylistSchema);
