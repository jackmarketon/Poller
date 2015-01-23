(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name frontendApp.clientobj
   * @description
   * # clientobj
   * Service in the frontendApp.
   */
  angular
    .module('frontendApp')
    .service('clientObj', clientObj);

  clientObj.$inject = ['$log', 'Restangular'];

  function clientObj($log, Restangular) {

    return {
      activeClient: {},
      all: Restangular.all('clients').getList().$object,
      refreshAll: refreshAll,
      newClient: newClient,
      removeClient: removeClient,
      saveClient: saveClient
    };

    function refreshAll() {
      this.all = Restangular.all('clients').getList().$object;
    }

    function newClient(name) {
      var client = {
            'name': name,
            'items': []
          };

      return Restangular
        .all('clients')
        .post(client)
        .then(newClientComplete)
        .catch(newClientFailed);

      function newClientComplete(response) {
        this.activeClient = response;
        this.refreshAll();
      }

      function newClientFailed(error) {
        $log.error('Create new client failed. ' + error.data);
      }
    }

    function saveClient() {
      this.activeClient.put();
    }

    function removeClient(client) {
      return client
        .remove()
        .then(removeClientComplete)
        .catch(removeClientFailed);

      function removeClientComplete() {
        this.refreshAll();
      }

      function removeClientFailed(error) {
        $log.error('Remove new client failed. ' + error.data);
      }
    }
  }
})();
