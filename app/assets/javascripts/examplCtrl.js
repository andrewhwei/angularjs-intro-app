(function() {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {
    $scope.task1 = "Walk the dog";
    $scope.task2 = "Cook dinner";
    $scope.task3 = "Vacuum the house";
  });
}());