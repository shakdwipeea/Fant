'use strict';

/**
 * @ngdoc function
 * @name fantApp.controller:CoverCtrl
 * @description
 * # CoverCtrl
 * Controller of the fantApp
 */
angular.module('fantApp')
  .controller('CoverCtrl', function ($scope,$window,$rootScope,User) {
    if($window.localStorage.getItem('Data') != '') {
  //	$rootScope.cred = JSON.parse($window.sessionStorage.getItem('Data'))||'';
    console.log("m",$window.localStorage.getItem('Data'));
  	$scope.username = JSON.parse($window.localStorage.getItem('Data'))|| '';
  }
  	/*$scope.show = function() {
  		//console.log($rootScope.d);
  		if($rootScope.cred == undefined) {
  			return false;
  		}
  		else 
  			return true;

  	};*/
	$scope.logout = function() {
		//console.log($window.localStorage.getItem('Data').pub);
		var promise = User.logout(JSON.parse($window.localStorage.getItem('Data')).pub);
		promise.then(function  (payload) {
			$scope.username = payload.success;
			//$rootScope.cred = "";
			$window.localStorage.setItem('Data','');
			$window.location.reload();
		});
  	}
  });
