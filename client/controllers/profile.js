app.controller('ProfileController', function (UserFactory, SongFactory, Upload, $scope){
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
  function likes($scope){
    var hasLiked = false;
    $scope.likeClick = function () {
    if (!hasLiked) {
        hasLiked = true;
        $scope.liked = 'Unlike';
        $scope.likeCount += 1;
    } else {
        hasLiked = false;
        $scope.liked = 'Like';
        $scope.likeCount -= 1;
        }
      }
    }
    $scope.upload = function(){
      console.log($scope.userimgFile);
      Upload.upload({
        url: '/uploadimg',
        data: {file: $scope.userimgFile, user:$scope.loggedIn},
      }).then(function(user){
        console.log("user is: ", user);
        if (user){
          $scope.loggedIn = user.data
          console.log("user image uploaded");
          console.log($scope.loggedIn)
        } else {
          console.log("user image upload error")
        }
      })
      }
  })
