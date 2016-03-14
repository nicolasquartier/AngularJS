'use strict';

(function() {

  function AppCtrl($scope, appVersion) {
    $scope.ver = appVersion;
    $scope.generateFromParent = function() {
      $scope.viewdata = {
        random: Math.random()
      }
    };

    $scope.remove = function() {
      $scope.viewdata.random = "";
    };
  }

  angular.module("demoApp")
    .controller("appCtrl", AppCtrl);

})();
