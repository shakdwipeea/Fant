'use strict';

/**
 * @ngdoc service
 * @name fantApp.AuthInterceptor
 * @description
 * # AuthInterceptor
 * Factory in the fantApp.
 */
angular.module('fantApp')
  .factory('AuthInterceptor', function () {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var requestInterceptor = {
      request: function  (config) {
        console.log('Akas');
      }
    };
    

    // Public API here
    return {
      requestInterceptor: requestInterceptor
    };
  });
