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

spiral.removeRightColumn = function(matrix){
  var resultMatrix = [];

  //if only 1 column exists return empty array
  if(matrix[0].length <= 1){ return []; }

  for(var i = 0; i < matrix.length; i++){
    var lastElementIndex = matrix[i].length - 1;
    if(lastElementIndex !== -1){
      resultMatrix.push(matrix[i].slice(0, lastElementIndex));
    }
  }

  return resultMatrix;
};

spiral.takeBottomRow = function(matrix){
  return matrix[matrix.length - 1];
};

spiral.removeBottomRow = function(matrix){
  var resultMatrix = [];
  for(var i = 0; i < matrix.length - 1; i++){
    resultMatrix.push(matrix[i]);
  }

  return resultMatrix;
};

spiral.takeLeftColumn = function(matrix){
  var resultMatrix = [];

  for(var i = 0; i < matrix.length; i++){
    if(matrix[i].length > 0){
      resultMatrix.push(matrix[i][0])
    }
  }

  return resultMatrix;
}

spiral.removeLeftColumn = function(matrix){
  var resultMatrix = [];

  //if only 1 column exists return empty array
  if(matrix[0].length <= 1){ return []; }

  for(var i = 0; i < matrix.length; i++){
    resultMatrix.push(matrix[i].slice(1));
  }

  return resultMatrix;
};

module.exports = spiral;
