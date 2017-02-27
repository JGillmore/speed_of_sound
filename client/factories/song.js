app.factory("SongFactory", function ($http, $location) {

   var factory = {};

   factory.uploadSong = function(song, callback){
     $http.post('/uploadSong', song).then(function(data){
       callback(data);
     })
   }
   return factory;

});
