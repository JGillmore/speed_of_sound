app.factory("UserFactory", function ($http, $location) {

   var loggedIn = {};
   var factory = {};

   factory.getLoggedIn = function(callback){
     if (!loggedIn.name){
       $location.path('/');
     }else{
       callback(loggedIn);
     }
   }
   factory.login = function(loginInfo, callback){
     $http.post('/login', loginInfo).then(function(data){
       loggedIn = data.data
       if (loggedIn.name){
         $location.path('/home')
       }else{
         callback(loggedIn);
       }
     })
   }
   factory.logOut = function(){
     loggedIn = {};
     $location.path('/');
   }

   return factory;

});
