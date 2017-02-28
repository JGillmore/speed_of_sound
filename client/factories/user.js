app.factory("UserFactory", function ($http, $location) {

  //  var loggedIn = {
  //    "_id": "58b5b757385c021658b8769d",
  //    "updatedAt": "2017-02-28T17:45:59.693Z",
  //    "createdAt": "2017-02-28T17:45:59.693Z",
  //    "email": "testing@test.org",
  //    "password": "salomi",
  //    "__v": 0,
  //    "name": {
  //      "user": "Test",
  //      "first": "Test",
  //      "last": "account"
  //    }
  //  };//hardcodded just for dev purposes, take this out before deployment
   var factory = {};
   var loggedIn ={};

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
