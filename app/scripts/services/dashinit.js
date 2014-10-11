'use strict';

/**
 * @ngdoc service
 * @name fantApp.DashInit
 * @description
 * # DashInit
 * Factory in the fantApp.
 */
angular.module('fantApp')
  .factory('DashInit', function ($http,$q,$window,$state,host,$cookieStore) {
    // Service logic
    // ...

    var meaningOfLife = 42;
    var getData = function  () {
      var DataPromise = $q.defer();
      var d = new Date().getTime();
      var DataFromStore = JSON.parse($window.localStorage.getItem('Data'))|| '';
      if(DataFromStore.pub == '') {
        $state.go('cover.signup');
      } 
      else {
        var StringHash = DataFromStore.priv + d.toString();
        var hash = CryptoJS.MD5(StringHash);
        console.log("" + hash);
        $http({
          method:"POST",
          url:host+'user_det.php/',
          data: {
            /*tm: d.toString(),
            pub_tok:DataFromStore.pub,
            prhash:''+ hash*/
          }
        }).then(function  (data) {
          // body...
          console.log(data.data);
          DataPromise.resolve(data.data);
        },function  (reason) {
          console.log(reason);
          // body...
          DataPromise.reject(reason);
        });

        return DataPromise.promise;
      }
    }

    // Public API here
    return {
     getData: getData
    };
  });
