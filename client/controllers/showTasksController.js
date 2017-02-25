app.controller('{{template}}Controller', function ({{template}}Factory, $scope){
  {{template}}Factory.showAll(function({{template}}){
    $scope.{{template}} = {{template}};
  })
  $scope.update = function(){
    {{template}}Factory.update(function({{template}}){
      $scope.{{template}} = {{template}};
    });
  }
});
