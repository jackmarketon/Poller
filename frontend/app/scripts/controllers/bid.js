'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:BidCtrl
 * @description
 * # BidCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('BidCtrl', function ($scope, clientObj) {

    $scope.clientObj = clientObj;

    $scope.submitted = false;
    $scope.bid = {};

    $scope.setActiveItem = function(item) {
        $scope.activeItem = item;
        $scope.submitted = false;
        $scope.bid = {};
    };

    $scope.submitBid = function() {
        if(!$scope.activeItem.bids){
            $scope.activeItem.bids = [];
        }
        $scope.activeItem.bids.push($scope.bid);
        $scope.clientObj.saveClient();

        $scope.submitted = true;
        $scope.bid = {};
    };

  });
