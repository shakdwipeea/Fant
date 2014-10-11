'use strict';

describe('Service: DashInit', function () {

  // load the service's module
  beforeEach(module('fantApp'));

  // instantiate service
  var DashInit;
  beforeEach(inject(function (_DashInit_) {
    DashInit = _DashInit_;
  }));

  it('should do something', function () {
    expect(!!DashInit).toBe(true);
  });

});
