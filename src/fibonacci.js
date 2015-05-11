var fibonacci = {};

fibonacci.recursion = function(n){
  if(n === 0){ return 0 };
  if(n === 1){ return 1 };
  return fibonacci.recursion(n-1) + fibonacci.recursion(n-2);
};

fibonacci.recursionMemorized = function(n){
  var memory = {};

  return function recurse(n) {
    var result;

    if(n in memory){
      result = memory[n];
    } else {
      if(n === 0 || n === 1){
        result = n;
      } else {
        result = recurse(n - 1) + recurse(n - 2);
      }

      memory[n] = result;
    }

    return result;
  }(n);
};

fibonacci.iterative = function(n){
  if(n === 0){ return 0 };
  if(n === 1){ return 1 };

  var prev = 0
  var current = 1;
  var result = 0;

  for(var i = 1; i < n; i++){
    result = prev + current;
    prev = current;
    current = result;
  }

  return result;
};

module.exports = fibonacci;
