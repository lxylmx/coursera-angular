(
  function () {
    'use strict';

    angular.module('LunchCheck', [])
    .controller ('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {

      $scope.content = "";
      $scope.message = "";
      var comma = ',';

      $scope.countNumber = function () {

        if ($scope.content == "") {
          $scope.message = "Please enter data first.";

        } else {
          var count = splitString($scope.content, comma);
          if (count > 3) {
            $scope.message = "Too much!.";
          } else {
            $scope.message = "Enjoy!";
          }
        }
      };

      function splitString(stringToSplit, separator) {
        var arrayOfStrings = stringToSplit.split(separator);
        return arrayOfStrings.length;
      };

    };
  }
)();
