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
    it('should return 21 if given 8 as nth input', function(){
      var result = fibonacci.recursion(8);
      var expected = 21;
      assert.equal(result, expected);
    });
    it('should return 144 if given 12 as nth input', function(){
      var result = fibonacci.recursion(12);
      var expected = 144;
      assert.equal(result, expected);
    });
  });

  describe('iterative', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        fibonacci.iterative(0);
      });
    });
    it('should return 5 if given 5 as nth input', function(){
      var result = fibonacci.iterative(5);
      var expected = 5;
      assert.equal(result, expected);
    });
    it('should return 21 if given 8 as nth input', function(){
      var result = fibonacci.iterative(8);
      var expected = 21;
      assert.equal(result, expected);
    });
    it('should return 144 if given 12 as nth input', function(){
      var result = fibonacci.iterative(12);
      var expected = 144;
      assert.equal(result, expected);
    });
  });
});
