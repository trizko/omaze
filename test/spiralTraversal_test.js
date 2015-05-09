var spiral = require('../src/spiralTraversal');
var assert = require('assert');
var fixtures = require('./fixtures.js')

describe('Spiral Traversal', function(){
  describe('takeTopRow()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.takeTopRow([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.takeTopRow(fixtures.takeTopRow.emptyMatrix.inputValue);
      var expected = fixtures.takeTopRow.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
  });
});
