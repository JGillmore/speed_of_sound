app.controller('SongController', function (SongFactory,$scope){
  function gotSongs(songs){
    $scope.songs=songs;
    console.log("this is the list of songs", songs);
  }
  SongFactory.showAll(gotSongs);
  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
});
