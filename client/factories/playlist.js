app.factory("PlaylistFactory", function ($http, $location) {
  var playlist = {};
  var factory = {};

  factory.addToPlaylist = function(song){
    $http.post('/addToPlaylist', song).then(function(data){
      playlist = data;
    })
  }
  factory.deleteFromPlaylist = function(playlist, callback){
    $http.post('/deleteFromPlaylist', playlist).then(function(data){
      callback(data);
    })
  }
  factory.getPlaylist = function(userName, callback){
    $http.post('/getPlaylist', {name:userName}).then(function(data){
      playlist = data.data;
      console.log("factory playlist: ",playlist);
      callback(playlist);
    })
  }
  return factory;

});
