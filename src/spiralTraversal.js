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

spiral.traverseClockwise = function(matrix){
  resultArray = [];

  while(matrix.length > 0){
    resultArray = resultArray.concat(spiral.takeTopRow(matrix));
    matrix = spiral.removeTopRow(matrix);
    if(matrix.length < 1) { continue; }
    resultArray = resultArray.concat(spiral.takeRightColumn(matrix));
    matrix = spiral.removeRightColumn(matrix);
    if(matrix.length < 1) { continue; }
    resultArray = resultArray.concat(spiral.takeBottomRow(matrix).reverse());
    matrix = spiral.removeBottomRow(matrix);
    if(matrix.length < 1) { continue; }
    resultArray = resultArray.concat(spiral.takeLeftColumn(matrix).reverse());
    matrix = spiral.removeLeftColumn(matrix);
    if(matrix.length < 1) { continue; }
  }

  return resultArray;
}

spiral.traverseCounterClockwise = function(matrix){
  resultArray = [];

  while(matrix.length > 0){
    resultArray = resultArray.concat(spiral.takeLeftColumn(matrix));
    matrix = spiral.removeLeftColumn(matrix);
    if(matrix.length < 1) { continue; }
    resultArray = resultArray.concat(spiral.takeBottomRow(matrix));
    matrix = spiral.removeBottomRow(matrix);
    if(matrix.length < 1) { continue; }
    resultArray = resultArray.concat(spiral.takeRightColumn(matrix).reverse());
    matrix = spiral.removeRightColumn(matrix);
    if(matrix.length < 1) { continue; }
    resultArray = resultArray.concat(spiral.takeTopRow(matrix).reverse());
    matrix = spiral.removeTopRow(matrix);
    if(matrix.length < 1) { continue; }
  }

  return resultArray;
}

module.exports = spiral;
