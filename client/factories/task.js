app.factory("{{template}}Factory", function ($http) {

   var {{template}} = {};
   var factory = {};

   factory.showAll = function(callback){
     $http.get('').then(function(){
      })
   }

   return factory;

});
