(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name frontendApp.controller:ReviewCtrl
   * @description
   * # ReviewCtrl
   * Controller of the frontendApp
   */
  angular
    .module('frontendApp')
    .controller('ReviewCtrl', ReviewCtrl);

  ReviewCtrl.$inject = ['clientObj'];

  function ReviewCtrl(clientObj) {
    var vm = this;

    vm.clientObj = clientObj;
    vm.setActiveItem = setActiveItem;
    vm.submitted = false;

    function setActiveItem(item) {
        vm.activeItem = item;
        vm.submitted = false;
    }

  }
})();
