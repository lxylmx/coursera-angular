(function () {
  'use stric';

  angular.module ('DIApp', [])
  .controller('DIController', function ($scope, $filter) {

    $scope.name = "Li";

    $scope.upper = function () {
      var upCase = $filter('uppercase');
      $scope.name = upCase($scope.name);
    };
  })
})();
