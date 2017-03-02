app.factory("ProfileFactory", function ($http, $location) {
  var songs= {};
  var factory = {};
  var users = {};

  factory.showAll = function(callback){
    $http.get('/songs').then(function(data){
      songs = data.data;
      for (var i = 0; i < songs.length; i++){
        songs[i].id = songs[i]._id;
      }
      callback(songs);
    })
  }
  factory.showAll = function(callback){
     $http.get('/user').then(function(data){
       user = data.data;
       callback(user);
      })
   }
   factory.uploadimg = function(user,callback){
     $http.post('/uploadimg', user).then(function(data){
       callback(data.data);
     })
   }
  return factory;

});
