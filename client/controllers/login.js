app.controller('LoginController', function (UserFactory, $scope){
  $scope.user = {};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }

  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.login = function(){
    UserFactory.login($scope.user, gotLoggedIn)
  }
  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
});
