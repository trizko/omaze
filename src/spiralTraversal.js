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

spiral.takeRightColumn = function(matrix){
  var resultMatrix = [];

  for(var i = 0; i < matrix.length; i++){
    var lastElementIndex = matrix[i].length - 1;
    if(lastElementIndex !== -1){
      resultMatrix.push(matrix[i][lastElementIndex])
    }
  }

  return resultMatrix;
}

module.exports = spiral;
