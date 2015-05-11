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

module.exports = minClockAngle;
