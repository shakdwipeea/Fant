'use strict';

/**
 * @ngdoc overview
 * @name fantApp
 * @description
 * # fantApp
 *
 * Main module of the application.
 */
angular
  .module('fantApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'ngTouch',
    'ngCookies'
  ])
  .config(function ($stateProvider,$urlRouterProvider,$provide,$httpProvider) {
    //$routeProvider
      //.when('/', {
        //templateUrl: 'views/main.html',
        //controller: 'MainCtrl'
      //})
      //.when('/about', {
        //templateUrl: 'views/about.html',
        //controller: 'AboutCtrl'
      //})
      //.otherwise({
        //redirectTo: '/'
      //});
console.log('akasl');
    $provide.factory('HttpInterceptor',function ($q,$window,$location) {
          
    
      return {
        request: function  (config) {
          // body...
          //console.log(config.url);
          var d = new Date().getTime();
          if($window.localStorage.getItem('Data') != '') {
            var tokens = JSON.parse($window.localStorage.getItem('Data'));
            var StringHash = tokens.priv + d.toString();
            var hash = CryptoJS.MD5(StringHash);
            config.url = config.url + '?tm=' + d.toString() + '&pub_tok=' + tokens.pub + '&prhash=' + hash;
          } 
          return config;
        },
        requestError: function  (rejection) {
          console.log('That');
        }
      };
    });

    $httpProvider.interceptors.push('HttpInterceptor');


    $urlRouterProvider.otherwise("/cover");

    $stateProvider
      .state('cover',{
        url: "/cover",
        templateUrl: "views/main.html",
        controller:"CoverCtrl"
      })
      .state('about',{
        url: "/about",
        templateUrl: "views/about.html"
      })
      .state('landing',{
        url:"/landing",
        templateUrl:"views/landing.html"
      })
      .state('landing.dashboard',{
        url:"/dash",
        templateUrl:"views/landing.dashboard.html",
        controller:"DashboardCtrl"
      })
      .state('cover.signin',{
        url:'/signin',
        templateUrl:"views/cover.signin.html",
        controller:"LoginCtrl"
      })
      .state('cover.signup',{
        url:'/signup',
        templateUrl:"views/signup.html",
        controller:"LoginCtrl"
      })
      ;
  });
