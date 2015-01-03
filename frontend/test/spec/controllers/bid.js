'use strict';

describe('Controller: BidCtrl', function () {

  // load the controller's module
  beforeEach(module('frontendApp'));

  var BidCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BidCtrl = $controller('BidCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
