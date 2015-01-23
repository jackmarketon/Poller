(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name frontendApp.controller:MenuCtrl
   * @description
   * # MenuCtrl
   * Controller of the frontendApp
   */
  angular
    .module('frontendApp')
    .controller('MenuCtrl', MenuCtrl);

  MenuCtrl.$inject = ['$location'];

  function MenuCtrl($location) {
    var vm = this;
    vm.isActive = isActive;

    function isActive(viewLocation) {
      return viewLocation === $location.url();
    }
  }
})();
