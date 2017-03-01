app.controller('SongBarController', function (SongFactory,$scope){
  $scope.soundOn=true;
  $scope.toggleSound = function(){
    if ($scope.soundOn){
      $scope.soundOn=false;
    }else{
      $scope.soundOn=true;
    }
  }
});
