var mongoose = require('mongoose');
var Playlist = mongoose.model('Playlist')

module.exports = {
  addToPlaylist: function(req,res){
    Playlist.findOne({user: req.body.user}, function(err, playlist){
      if (!playlist){
        playlist = new Playlist();
        playlist.user = req.body.user;
      }
      playlist.songs.push(req.body.song);
      console.log("new playlist",playlist);
      playlist.save(function(err){
        console.log(err);
        res.json(playlist)
      })
    })
  },
  getPlaylist: function(req,res){
    Playlist.findOne({user: req.body.name}, function(err, playlist){
      if(playlist){
        console.log("playlist found", playlist);
        res.json(playlist);
      }else{
        console.log("no playlist");
        res.json();
      }
    })
  },
};
