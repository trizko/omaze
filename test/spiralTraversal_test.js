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
    it('should return one element array if given a 1x1 matrix', function(){
      var result = spiral.takeTopRow(fixtures.takeTopRow.oneByOne.inputValue);
      var expected = fixtures.takeTopRow.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a 1xm matrix', function(){
      var result = spiral.takeTopRow(fixtures.takeTopRow.oneRow.inputValue);
      var expected = fixtures.takeTopRow.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return an 1 length array if given a nx1 matrix', function(){
      var result = spiral.takeTopRow(fixtures.takeTopRow.oneColumn.inputValue);
      var expected = fixtures.takeTopRow.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a nxm matrix', function(){
      var result = spiral.takeTopRow(fixtures.takeTopRow.manyRows.inputValue);
      var expected = fixtures.takeTopRow.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('removeTopRow()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.removeTopRow([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.removeTopRow(fixtures.removeTopRow.emptyMatrix.inputValue);
      var expected = fixtures.removeTopRow.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a 1x1 matrix', function(){
      var result = spiral.removeTopRow(fixtures.removeTopRow.oneByOne.inputValue);
      var expected = fixtures.removeTopRow.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a 1xm matrix', function(){
      var result = spiral.removeTopRow(fixtures.removeTopRow.oneRow.inputValue);
      var expected = fixtures.removeTopRow.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return matrix with top row removed if given a nx1 matrix', function(){
      var result = spiral.removeTopRow(fixtures.removeTopRow.oneColumn.inputValue);
      var expected = fixtures.removeTopRow.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with top removed if given a nxm matrix', function(){
      var result = spiral.removeTopRow(fixtures.removeTopRow.manyRows.inputValue);
      var expected = fixtures.removeTopRow.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('takeRightColumn()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.takeRightColumn([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.takeRightColumn(fixtures.takeRightColumn.emptyMatrix.inputValue);
      var expected = fixtures.takeRightColumn.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one element array if given a 1x1 matrix', function(){
      var result = spiral.takeRightColumn(fixtures.takeRightColumn.oneByOne.inputValue);
      var expected = fixtures.takeRightColumn.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a 1xm matrix', function(){
      var result = spiral.takeRightColumn(fixtures.takeRightColumn.oneRow.inputValue);
      var expected = fixtures.takeRightColumn.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return an n length array if given a nx1 matrix', function(){
      var result = spiral.takeRightColumn(fixtures.takeRightColumn.oneColumn.inputValue);
      var expected = fixtures.takeRightColumn.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a nxm matrix', function(){
      var result = spiral.takeRightColumn(fixtures.takeRightColumn.manyRows.inputValue);
      var expected = fixtures.takeRightColumn.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('removeRightColumn()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.removeRightColumn([[]]);
      });
    });
    it('should return an empty matrix if given an empty matrix', function(){
      var result = spiral.removeRightColumn(fixtures.removeRightColumn.emptyMatrix.inputValue);
      var expected = fixtures.removeRightColumn.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a 1x1 matrix', function(){
      var result = spiral.removeRightColumn(fixtures.removeRightColumn.oneByOne.inputValue);
      var expected = fixtures.removeRightColumn.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return matrix with right column removed if given a 1xm matrix', function(){
      var result = spiral.removeRightColumn(fixtures.removeRightColumn.oneRow.inputValue);
      var expected = fixtures.removeRightColumn.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a nx1 matrix', function(){
      var result = spiral.removeRightColumn(fixtures.removeRightColumn.oneColumn.inputValue);
      var expected = fixtures.removeRightColumn.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return matrix with right column removed if given a nxm matrix', function(){
      var result = spiral.removeRightColumn(fixtures.removeRightColumn.manyRows.inputValue);
      var expected = fixtures.removeRightColumn.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });
});
