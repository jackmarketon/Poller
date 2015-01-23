(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name frontendApp.controller:BidCtrl
   * @description
   * # BidCtrl
   * Controller of the frontendApp
   */
  angular
    .module('frontendApp')
    .controller('BidCtrl', BidCtrl);

  BidCtrl.$inject = ['clientObj'];

  function BidCtrl(clientObj) {
    var vm = this;

    vm.bid = {};
    vm.clientObj = clientObj;
    vm.submitted = false;
    vm.setActiveItem = setActiveItem;

    vm.submitBid = submitBid;

    function setActiveItem(item) {
      vm.activeItem = item;
      vm.submitted = false;
      vm.bid = {};
    }

    function submitBid() {
      if(!vm.activeItem.bids){
        vm.activeItem.bids = [];
      }
      vm.activeItem.bids.push(vm.bid);
      vm.clientObj.saveClient();

      vm.submitted = true;
      vm.bid = {};
    }
  }

})();
