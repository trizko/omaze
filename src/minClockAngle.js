var minClockAngle = {};

minClockAngle.parseHour = function(time){
  return parseInt(time.split(':')[0]);
};

minClockAngle.parseMinutes = function(time){
  return parseInt(time.split(':')[1]);
};

module.exports = minClockAngle;
