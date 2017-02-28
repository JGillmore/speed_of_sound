var mongoose = require('mongoose');
var Song = mongoose.model('Song')
var fs = require('fs');

module.exports = {
  upload: function(req,res){
    var song = new Song(req.body);
    song.url = "client/audio/"+req.file.filename+req.file.originalname.substr(req.file.originalname.length-4)
    fs.rename(req.file.path, song.url, function(){
      console.log(song);
      res.json();
    })
  },
};


// { artist: 'BJump', title: 'its still a song title' }
// { fieldname: 'file',
//   originalname: 'Allegro from Duet in C Major.mp3',
//   encoding: '7bit',
//   mimetype: 'audio/mp3',
//   destination: 'temp/',
//   filename: '6ac7b349c8b8caa8bf4926088c1fd2c9',
//   path: 'temp\\6ac7b349c8b8caa8bf4926088c1fd2c9',
//   size: 1430174 }
