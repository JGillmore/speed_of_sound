var mongoose = require('mongoose');
var Song = mongoose.model('Song')
var fs = require('fs');

module.exports = {
  allSongs: function(req,res){
    Song.find({}, function(err, songs){
      console.log("all songs", songs);
      res.json(songs);
    })
  },
  upload: function(req,res){
    var song = new Song(req.body);
    song.url = "audio/"+req.file.filename+req.file.originalname.substr(req.file.originalname.length-4)
    fs.rename(req.file.path, "client/"+song.url, function(){
      song.save(function(err){
        console.log(song);
        res.json();
      })
    })
  },
};
