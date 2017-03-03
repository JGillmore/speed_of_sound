app.controller('FollowController', function (UserFactory,$scope, $http, $location, $routeParams ){
  $scope.following= function(){
    var request = {};
    var FollowerId = $routeParams.id;
    var request = {
      follower: FollowerId
    };
    $http.post('/follow_submit', request)
    .success(function(res){
      $scope.following = res.following;

    }).err(function(err){
      console.log(err);
    });
  };
  $scope.following();
});
