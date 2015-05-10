var fibonacci = require('../src/fibonacci.js');
var assert = require('assert');

describe('Fibonacci', function(){
  describe('recursion', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        fibonacci.recursion(0);
      });
    });
    it('should return 5 if given 5 as nth input', function(){
      var result = fibonacci.recursion(5);
      var expected = 5;
      assert.equal(result, expected);
    });
  });
});
