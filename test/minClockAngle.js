var fibonacci = require('../src/minClockAngle.js');
var assert = require('assert');

describe('Minimum 24 hour clock angle', function(){
  describe('parseHour', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        minClockAngle.parseHour("01:23");
      });
    });
  });
});
