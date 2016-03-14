'use strict';

(function() {

  function OtherCtrl($scope) {
    $scope.generateFromChild = function() {
      $scope.viewdata.random = Math.random();
    };

    $scope.removeChild = function() {
      $scope.viewdata.random = "";
    };
  }

  angular.module("demoApp")
    .controller("otherCtrl", OtherCtrl);

})();

