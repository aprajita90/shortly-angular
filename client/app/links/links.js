angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {
  // console.log('----------------------------------', Links);
  // Your code here
  $scope.data = {};
  // console.log('-------------------', Links.getAll());
  // console.log($scope.data);
  Links.getAll().then(function(data) {
    $scope.data.links = data;
    console.log( '--------', $scope.data.links);
  });
});
