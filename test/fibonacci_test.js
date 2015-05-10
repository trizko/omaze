var spiral = require('../src/fibonacci.js');
var assert = require('assert');

describe('Fibonacci', function(){
  describe('fibRecursion', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        fibonacci.recursion(0);
      });
    });
  });
});
