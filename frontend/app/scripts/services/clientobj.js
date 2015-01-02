'use strict';

/**
 * @ngdoc service
 * @name frontendApp.clientobj
 * @description
 * # clientobj
 * Service in the frontendApp.
 */
angular.module('frontendApp')
  .service('clientObj', function (Restangular) {

    var clientObj = {};

    clientObj.all = Restangular.all('clients').getList().$object;

    clientObj.refreshAll = function() {
        clientObj.all = Restangular.all('clients').getList().$object;
    };

    clientObj.newClient = function(name) {
        var newClient = {
            'name': name,
            'items': []
        };

        Restangular.all('clients').post(newClient).then(function(client) {
            clientObj.activeClient = client;
            clientObj.refreshAll();
        });
    };

    clientObj.saveClient = function() {
        clientObj.activeClient.put();
    };

    clientObj.deleteClient = function() {
        clientObj.activeClient.remove().then(function() {
            clientObj.refreshAll();
        });
    };

    clientObj.removeClient = function(client) {
        client.remove().then(function() {
            clientObj.refreshAll();
        });
    };

    return clientObj;
  });
