(function() {
  "use strict";
  angular.module("app").controller("exampleCtrl", function($scope) {
    $scope.tasks = ["Walk the dog", "Cook dinner", "Vacuum the house"];
  });
}());