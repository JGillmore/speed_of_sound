app.factory("UserFactory", function ($http, $location) {

   var loggedIn = {};
   var factory = {};

   factory.register = function(user, callback){
     $http.post('/register', user).then(function(data){
       loggedIn = data.data;
       console.log(data.data);
       callback(loggedIn);
     })
   }
   factory.checkUserName = function(userName, callback){
     console.log("factory ", userName);
     $http.post('/checkUserName', {userName:userName}).then(function(data){
       callback(data.data.screenName);
     })
   }
   factory.getLoggedIn = function(callback){
     callback(loggedIn);
   }
   factory.login = function(loginInfo, callback){
     $http.post('/login', loginInfo).then(function(data){
       console.log(data);
       loggedIn = data.data;
       callback(loggedIn);
     })
   }
   factory.logOut = function(){
     loggedIn = {};
     $location.path('/');
   }

   return factory;

});
