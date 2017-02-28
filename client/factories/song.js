app.factory("SongFactory", function ($http, $location) {

   var factory = {};

   factory.uploadSong = function(song, callback){
     $http.post('/uploadSong', song).then(function(data){
       callback(data);
     })
   }
   factory.showAll = function(callback){
     $http.get('/songs').then(function(data){
       songs = data.data;
       callback(songs);
     })
   }
   return factory;

});
