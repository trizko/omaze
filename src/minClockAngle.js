var minClockAngle = {};

minClockAngle.parseHour = function(time){
  return parseInt(time.split(':')[0]);
};

minClockAngle.parseMinutes = function(time){
  return parseInt(time.split(':')[1]);
};

minClockAngle.minuteAngleFromOrigin = function(time){
  return minClockAngle.parseMinutes(time) * 6;
};

minClockAngle.hourAngleFromOrigin = function(time){
  return (minClockAngle.parseHour(time)*15) + (minClockAngle.parseMinutes(time) * (0.25));
};

minClockAngle.getMinAngle = function(time){
  var angle = Math.abs(minClockAngle.minuteAngleFromOrigin(time) -
                       minClockAngle.hourAngleFromOrigin(time))
  return angle > 180.0 ? 360 - angle : angle;
};

module.exports = minClockAngle;
