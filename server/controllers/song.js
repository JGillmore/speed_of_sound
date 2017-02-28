var mongoose = require('mongoose');
var Song = mongoose.model('Song')
var fs = require('fs');

module.exports = {
  upload: function(req,res){
    var song = new Song(req.body);
    song.url = "client/audio/"+req.file.filename+req.file.originalname.substr(req.file.originalname.length-4)
    fs.rename(req.file.path, song.url, function(){
      song.save(function(err){
        res.json();
      })
    })
  },
};
