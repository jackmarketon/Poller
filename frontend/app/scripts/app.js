(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name frontendApp
   * @description
   * # frontendApp
   *
   * Main module of the application.
   */
  angular
    .module('frontendApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'restangular'
    ])
    .config(config);

  config.$inject = ['$routeProvider', 'RestangularProvider'];

  function config($routeProvider, RestangularProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'vm'
      })
      .when('/manage', {
        templateUrl: 'views/manage.html',
        controller: 'ManageCtrl',
        controllerAs: 'vm'
      })
      .when('/bid', {
        templateUrl: 'views/bid.html',
        controller: 'BidCtrl',
        controllerAs: 'vm'
      })
      .when('/review', {
        templateUrl: 'views/review.html',
        controller: 'ReviewCtrl',
        controllerAs: 'vm'
      })
      .otherwise({
        redirectTo: '/'
      });

    /** Rest Router **/
    RestangularProvider
      .setRequestSuffix('')
      .setBaseUrl('http://0.0.0.0:9353/api')
      .setDefaultHttpFields({
        cache: false
      })
      .setRestangularFields({
        id: '_id'
      });
  }
})();