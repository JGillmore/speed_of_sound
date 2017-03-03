app.factory("UserFactory", function ($http, $location) {
   var loggedIn = {};
   var factory = {};
   var users = {};
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
   factory.showAll = function(callback){
    $http.get('/users').then(function(data){
      users = data.data;
      callback(users);
     })
  }
   factory.logOut = function(){
     loggedIn = {};
     $location.path('/');
   }
   factory.follow_submit = function(user){
     $http.post('/follow_submit', user).then(function(data){
       follower = data.data;
     })
}
   return factory;

});
