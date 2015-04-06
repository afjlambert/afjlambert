'use strict';

/**
 * @ngdoc overview
 * @name afjlambertApp
 * @description
 * # afjlambertApp
 *
 * Main module of the application.
 */
angular
  .module('afjlambertApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        // controller: 'MainCtrl'
      })
      .when('/work', {
        templateUrl: 'views/work.html',
        controller: 'WorkCtrl'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
