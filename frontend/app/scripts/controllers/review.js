'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ReviewCtrl
 * @description
 * # ReviewCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ReviewCtrl', function ($scope, clientObj) {

    $scope.clientObj = clientObj;

    $scope.submitted = false;

    $scope.setActiveItem = function(item) {
        $scope.activeItem = item;
        $scope.submitted = false;
    };

  });
