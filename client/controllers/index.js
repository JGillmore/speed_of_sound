app.controller('IndexController', function (UserFactory, $scope){
  $scope.user = {};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }

  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
});
