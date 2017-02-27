app.controller('UploadController', function (UserFactory, Upload, SongFactory, $scope){
  $scope.song={};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
  }
  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
  $scope.upload = function(){
    Upload.upload({
      url: '/upload',
      data: {file: $scope.file, artist:$scope.loggedIn.name.user, title: $scope.song.title},
    }).then(function(){
      console.log("file uploaded");
    })
    // $scope.song.artist = $scope.loggedIn.name.user;
    }
});
