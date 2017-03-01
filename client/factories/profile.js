app.factory("ProfileFactory", function ($http, $location) {
  var songs= {};
  var factory = {};

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
