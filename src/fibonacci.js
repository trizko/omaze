var fibonacci = {};

fibonacci.recursion = function(n){
  if(n === 0){ return 0 };
  if(n === 1){ return 1 };
  return fibonacci.recursion(n-1) + fibonacci.recursion(n-2);
};

module.exports = fibonacci;
