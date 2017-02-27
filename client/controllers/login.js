app.controller('LoginController', function (UserFactory, $scope){
  $scope.user = {};
  $scope.user.name = {};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }
  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.register = function(){
    UserFactory.register($scope.user,gotLoggedIn)
  }
  $scope.checkUserName = function(){
    UserFactory.checkUserName($scope.user.name.user, function(userNameIs){
      $scope.screenName = userNameIs;
    })
  }
  $scope.logIn = function(){
    UserFactory.login($scope.user, gotLoggedIn)
  }
  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
});
