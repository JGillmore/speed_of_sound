app.controller('getfollowingController', function (UserFactory,$scope, $http, $location ){
  $scope.following= function(){
    var request = {};
    var FollowerId = $routeParams.id;
    var request = {
      follower: FollowerId
    };
    $http.post('/getfollowing', req)
    .success(function(res){
      $scope.following = res.following;

    }).err(function(err){
      console.log(err);
    });
  };
  $scope.following();
});
