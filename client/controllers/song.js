app.controller('SongController', function (UserFactory, SongFactory,$scope){

  $scope.user = {};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
    if(!loggedIn.name){
      $location.path('/');
    }
  }
  UserFactory.getLoggedIn(gotLoggedIn)

  function gotSongs(songs){
    $scope.songs=songs;
  }
  function gotSong(song){
    $scope.song=song;
  }
  SongFactory.showAll(gotSongs);
  SongFactory.getSong(gotSong);

  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
  $scope.addComment = function(){
    SongFactory.addComment($scope.song, $scope.loggedIn, $scope.newComment)
  }
});
