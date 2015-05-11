var minClockAngle = {};

minClockAngle.parseHour = function(time){
  return parseInt(time.split(':')[0]);
};

module.exports = minClockAngle;
