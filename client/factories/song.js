app.factory("SongFactory", function ($http, $location) {
  var songs= {};
  var factory = {};

  factory.uploadSong = function(song, callback){
    $http.post('/uploadSong', song).then(function(data){
      callback(data);
    })
  }
  factory.showAll = function(callback){
    $http.get('/songs').then(function(data){
      songs = data.data;
      for (var i = 0; i < songs.length; i++){
        songs[i].id = songs[i]._id;
      }
      callback(songs);
    })
  }
  return factory;

});
