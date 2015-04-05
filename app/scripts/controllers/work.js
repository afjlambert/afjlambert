'use strict';

/**
 * @ngdoc function
 * @name afjlambertApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the afjlambertApp
 */
angular.module('afjlambertApp')
  .controller('WorkCtrl', function ($scope) {
    $scope.projects = [
      {
        'title': 'Binck',
        'tags': [
          'responsive',
          'cloud'
        ]
      }
    ];
  });
