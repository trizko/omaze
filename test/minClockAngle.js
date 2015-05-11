var minClockAngle = require('../src/minClockAngle.js');
var assert = require('assert');

describe('Minimum 24 hour clock angle', function(){
  describe('parseHour', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        minClockAngle.parseHour("01:23");
      });
    });
    it('should return 6 if given 6:00 as time string', function(){
      var result = minClockAngle.parseHour('6:00');
      var expected = 6;
      assert.equal(result, expected);
    });
    it('should return 6 if given 6:17 as time string', function(){
      var result = minClockAngle.parseHour('6:17');
      var expected = 6;
      assert.equal(result, expected);
    });
    it('should return 18 if given 18:00 as time string', function(){
      var result = minClockAngle.parseHour('18:00');
      var expected = 18;
      assert.equal(result, expected);
    });
    it('should return 18 if given 18:17 as time string', function(){
      var result = minClockAngle.parseHour('18:17');
      var expected = 18;
      assert.equal(result, expected);
    });
  });
});
