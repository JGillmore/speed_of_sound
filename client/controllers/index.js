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
  SongFactory.showAll(function(songs){
    $scope.songs = songs;
  })
  $scope.addToPlaylist = function(song){
    console.log("its the song", song);
    var data = {song:song, user: $scope.loggedIn.name.user}
    console.log("data= ", data);
    PlaylistFactory.addToPlaylist(data);
  }
  $scope.print = function(songs){
    console.log(songs);
  }
});
