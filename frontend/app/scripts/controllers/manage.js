'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:ManageCtrl
 * @description
 * # ManageCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('ManageCtrl', function ($scope, $route, clientObj) {

    $scope.$route = $route;

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

    $scope.activateClient = function(client) {
        $scope.clientObj.activeClient = client;
        $scope.item = {};
        $scope.editItem = false;
    };

    $scope.newClient = function() {
        $scope.clientObj.newClient($scope.clientName);
        $scope.item = {};
        $scope.editItem = false;
    };

    $scope.activateItem = function(item) {
        $scope.item = item;
        $scope.editItem = true;
    };

    $scope.saveItem = function() {
        $scope.clientObj.activeClient.items.push($scope.item);
        $scope.clientObj.saveClient();
        $scope.item = {};
    };

  });
