(function() {
  'use strict';

  /**
   * @ngdoc function
   * @name frontendApp.controller:ManageCtrl
   * @description
   * # ManageCtrl
   * Controller of the frontendApp
   */
  angular
    .module('frontendApp')
    .controller('ManageCtrl', ManageCtrl);

  ManageCtrl.$inject = ['$route', 'clientObj'];

  function ManageCtrl($route, clientObj) {
    var vm = this;

    vm.activateClient = activateClient;
    vm.activateItem = activateItem;
    vm.clientObj = clientObj;
    vm.editItem = false;
    vm.item = {};
    vm.newClient = newClient;
    vm.types = [
      'feature',
      'bugfix',
      'design',
      'ux review',
      'interactive',
    ];
    vm.saveItem = saveItem;
    vm.$route = $route;

    vm.clientObj.refreshAll();

    function activateClient(client) {
      console.log(client);
      vm.clientObj.activeClient = client;
      vm.item = {};
      vm.editItem = false;
    }

    function newClient() {
      vm.clientObj.newClient(vm.clientName);
      vm.item = {};
      vm.editItem = false;
    }

    function activateItem(item) {
      vm.item = item;
      vm.editItem = true;
    }

    function saveItem() {
      vm.clientObj.activeClient.items.push(vm.item);
      vm.clientObj.saveClient();
      vm.item = {};
    }

  }
})();
