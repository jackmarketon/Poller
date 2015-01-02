'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ManageCtrl', function ($scope, clientObj) {

    $scope.clientObj = clientObj;

    $scope.clientObj.refreshAll();

    $scope.item = {};

    $scope.editItem = false;

    $scope.types = [
        'feature',
        'bugfix',
        'design',
        'ux review',
        'interactive',
    ];

    $scope.newClient = function() {
        $scope.clientObj.newClient($scope.clientName);
    };

    $scope.saveItem = function() {
        $scope.clientObj.activeClient.items.push($scope.item);
        $scope.clientObj.saveClient();
        $scope.item = {};
    };

  });
