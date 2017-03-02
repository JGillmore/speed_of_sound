app.controller('PlaylistController', function (UserFactory, PlaylistFactory, SongFactory, $scope){
  $scope.song={};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }
  function gotPlaylist(playlist){
    console.log("controll playlist: ",playlist);
    $scope.playlist = playlist;
  }
  UserFactory.getLoggedIn(function(loggedIn){
    $scope.loggedIn = loggedIn;
    PlaylistFactory.getPlaylist(loggedIn.name.user, gotPlaylist);
  });

  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
  $scope.addToPlaylist = function(song){
    PlaylistFactory.addToPlaylist(song, gotPlaylists);
  }
  $scope.deleteFromPlaylist = function(song){
    PlaylistFactory.deleteFromPlaylist(song, gotPlaylists);
  }
  $scope.print = function(songs){
    console.log(songs);
  }
});
