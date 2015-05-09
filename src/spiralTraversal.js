var spiral = {};

spiral.takeTopRow = function(matrix){
  return matrix[0];
};

spiral.removeTopRow = function(matrix){
  var resultMatrix = [];
  for(var i = 1; i < matrix.length; i++){
    resultMatrix.push(matrix[i]);
  }

  return resultMatrix;
};

module.exports = spiral;
