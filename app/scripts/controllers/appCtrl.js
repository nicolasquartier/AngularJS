'uwe strict';

(function() {

  function AppCtrl($scope, appVersion) {
    $scope.ver = appVersion;
  }

  angular.module("demoApp")
    .controller("appCtrl", AppCtrl);

})();
