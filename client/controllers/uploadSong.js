app.controller('UploadController', function ($location, UserFactory, Upload, SongFactory, $scope){
  $scope.song={};
  function gotLoggedIn(loggedIn){
    $scope.loggedIn = loggedIn;
    if(!loggedIn.name){
      $location.path('/');
    }
  }
  UserFactory.getLoggedIn(gotLoggedIn)

  $scope.logOut = function(){
    UserFactory.logOut();
    $scope.loggedIn = {};
  }
  $scope.upload = function(){
    Upload.upload({
      url: '/upload',
      data: {file: [$scope.file, $scope.imgFile], artist:$scope.loggedIn.name.user, title: $scope.song.title},
    }).then(function(){
    })
    // $scope.song.artist = $scope.loggedIn.name.user;
    }
});
