'use strict';

//immediate function
(function() {

  angular.module('demoApp', ["demoApp.config"])
    .config(function(appVersion) {
      //console.log("config demoApp " + appVersion);
    });

})();
