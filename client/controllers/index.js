app.controller('IndexController', function (UserFactory, SongFactory, $scope){
  $scope.user = {};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }

  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
  SongFactory.showAll(function(songs){
    $scope.songs = songs;
  })
});
