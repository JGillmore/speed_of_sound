app.factory("UserFactory", function ($http, $location) {

   var loggedIn = {};//hardcodded just for dev purposes, take this out before deployment
   var factory = {};

   factory.register = function(user, callback){
     $http.post('/register', user).then(function(data){
       loggedIn = data.data;
       callback(loggedIn);
     })
   }
   factory.checkUserName = function(userName, callback){
     $http.post('/checkUserName', {userName:userName}).then(function(data){
       callback(data.data.screenName);
     })
   }
   factory.getLoggedIn = function(callback){
     callback(loggedIn);
     console.log(loggedIn);
   }
   factory.login = function(loginInfo, callback){
     $http.post('/login', loginInfo).then(function(data){
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
