'use strict';

/**
 * @ngdoc service
 * @name fantApp.Player
 * @description
 * # Player
 * Factory in the fantApp.
 */
angular.module('fantApp')
  .factory('Player', function ($http,$q,host) {
    // Service logic
    // ...

    var getPlayers = function  (number) {
      // body...
      var players = $q.defer();
      $http({
        method:'POST',
        url:host+'search_goal.php/',
        data: {
          flag: number
        }
      }).then(function  (data) {
        // body...
        console.log(data.data);
        players.resolve(data.data);
      },function  (reason) {
        // body...
        console.log(reason);
        players.reject(reason);
      });
      return players.promise;
    }

    // Public API here
    return {
      getPlayers: getPlayers
    };
  });
