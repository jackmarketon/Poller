'use strict';

describe('Service: clientobj', function () {

  // load the service's module
  beforeEach(module('frontendApp'));

  // instantiate service
  var clientobj;
  beforeEach(inject(function (_clientobj_) {
    clientobj = _clientobj_;
  }));

  it('should do something', function () {
    expect(!!clientobj).toBe(true);
  });

});
