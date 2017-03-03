app.controller('IndexController', function (PlaylistFactory, UserFactory, SongFactory, $scope){
  $scope.user = {};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }

  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};

  }
  UserFactory.showAll(function(users){
    $scope.users = users;
  })
  SongFactory.showAll(function(songs){
    $scope.songs = songs;
  })
  $scope.addToPlaylist = function(song){
    var data = {song:song, user: $scope.loggedIn.name.user}
    PlaylistFactory.addToPlaylist(data);
  }
  $scope.print = function(songs){
  }
  
});
