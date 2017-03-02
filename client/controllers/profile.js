app.controller('ProfileController', function (UserFactory, SongFactory, $scope){
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
  })
