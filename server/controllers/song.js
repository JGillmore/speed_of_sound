var mongoose = require('mongoose');
var Song = mongoose.model('Song')
var fs = require('fs');

module.exports = {
  allSongs: function(req,res){
    Song.find({}, function(err, songs){
      res.json(songs);
    })
  },
  upload: function(req,res){
    var song = new Song(req.body);
    song.url = "audio/"+song.id+req.files[0].originalname.substr(req.files[0].originalname.length-4)
    song.pic = "images/"+song.id+req.files[1].originalname.substr(req.files[1].originalname.length-4)
    song.save(function(err){
      res.json();
    })
    fs.rename(req.files[0].path, "client/"+song.url, function(){
    })
    fs.rename(req.files[1].path, "client/"+song.pic, function(){
    })
  },
};
