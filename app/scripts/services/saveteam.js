'use strict';

/**
 * @ngdoc service
 * @name fantApp.SaveTeam
 * @description
 * # SaveTeam
 * Factory in the fantApp.
 */
angular.module('fantApp')
  .factory('SaveTeam', function ($q,host) {
    // Service logic
    // ...

    var meaningOfLife = 42;

    var Save = function  (flag,name) {
      // body...
      var InitialPromise = $q.defer();
      $http.({
        method:'POST',
        url:'host' + save.php/,
        data: {
          flag: flag,
          name: name
        }
      }).then(function  (data) {
        // body...
        console.log(data.data);
        InitialPromise.resolve(data.data);
      },function  (reason) {
        // body...
        console.log(reason);
        InitialPromise.reject(reason);
      });
      return InitialPromise.promise;
    }

    // Public API here
    return {
      someMethod: function () {
        return meaningOfLife;
      }
    };
  });
