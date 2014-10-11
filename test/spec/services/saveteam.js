'use strict';

describe('Service: SaveTeam', function () {

  // load the service's module
  beforeEach(module('fantApp'));

  // instantiate service
  var SaveTeam;
  beforeEach(inject(function (_SaveTeam_) {
    SaveTeam = _SaveTeam_;
  }));

  it('should do something', function () {
    expect(!!SaveTeam).toBe(true);
  });

});
