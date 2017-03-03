app.controller('SongBarController', function (SongFactory,$scope){
  $scope.soundOn=true;
  $scope.repeatOn=false;
  $scope.toggleSound = function(){
    if ($scope.soundOn){
      $scope.soundOn=false;
    }else{
      $scope.soundOn=true;
    }
  }
  $scope.toggleRepeat = function(){
    if ($scope.repeatOn){
      $scope.repeatOn=false;
    }else{
      $scope.repeatOn=true;
    }
  }
});
