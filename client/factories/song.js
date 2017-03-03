app.factory("SongFactory", function ($http, $location) {
  var songs= {};
  var factory = {};
  var song = {};

  factory.uploadSong = function(newSong, callback){
    $http.post('/uploadSong', newSong).then(function(data){
      callback(data);
    })
  }
  factory.showAll = function(callback){
    $http.get('/songs').then(function(data){
      songs = data.data;
      callback(songs);
    })
  }
  factory.goToSong = function(setSong){
    song = setSong;
    $location.path('/song')
  }
  factory.getSong = function(callback){
    callback(song)
  }
  factory.addComment = function(song, user, comment){
    $http.post("/commentSong", {song:song,user:user,comment:comment}).then($location.path('/'))
  }
  return factory;
});
