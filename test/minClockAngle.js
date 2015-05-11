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

  describe('parseMinutes', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        minClockAngle.parseMinutes("01:23");
      });
    });
    it('should return 0 if given 6:00 as time string', function(){
      var result = minClockAngle.parseMinutes('6:00');
      var expected = 0;
      assert.equal(result, expected);
    });
    it('should return 17 if given 6:17 as time string', function(){
      var result = minClockAngle.parseMinutes('6:17');
      var expected = 17;
      assert.equal(result, expected);
    });
    it('should return 0 if given 18:00 as time string', function(){
      var result = minClockAngle.parseMinutes('18:00');
      var expected = 0;
      assert.equal(result, expected);
    });
    it('should return 17 if given 18:17 as time string', function(){
      var result = minClockAngle.parseMinutes('18:17');
      var expected = 17;
      assert.equal(result, expected);
    });
  });

  describe('minuteAngleFromOrigin', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        minClockAngle.minuteAngleFromOrigin("01:23");
      });
    });
    it('should return 0 if given 6:00 as time string', function(){
      var result = minClockAngle.minuteAngleFromOrigin('6:00');
      var expected = 0;
      assert.equal(result, expected);
    });
    it('should return 102 if given 6:17 as time string', function(){
      var result = minClockAngle.minuteAngleFromOrigin('6:17');
      var expected = 102;
      assert.equal(result, expected);
    });
    it('should return 180 if given 18:30 as time string', function(){
      var result = minClockAngle.minuteAngleFromOrigin('18:30');
      var expected = 180;
      assert.equal(result, expected);
    });
    it('should return 354 if given 18:59 as time string', function(){
      var result = minClockAngle.minuteAngleFromOrigin('18:59');
      var expected = 354;
      assert.equal(result, expected);
    });
  });
});
