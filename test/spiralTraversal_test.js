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

  describe('takeBottomRow()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.takeBottomRow([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.takeBottomRow(fixtures.takeBottomRow.emptyMatrix.inputValue);
      var expected = fixtures.takeBottomRow.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one element array if given a 1x1 matrix', function(){
      var result = spiral.takeBottomRow(fixtures.takeBottomRow.oneByOne.inputValue);
      var expected = fixtures.takeBottomRow.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a 1xm matrix', function(){
      var result = spiral.takeBottomRow(fixtures.takeBottomRow.oneRow.inputValue);
      var expected = fixtures.takeBottomRow.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return an 1 length array if given a nx1 matrix', function(){
      var result = spiral.takeBottomRow(fixtures.takeBottomRow.oneColumn.inputValue);
      var expected = fixtures.takeBottomRow.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a nxm matrix', function(){
      var result = spiral.takeBottomRow(fixtures.takeBottomRow.manyRows.inputValue);
      var expected = fixtures.takeBottomRow.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('removeBottomRow()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.removeBottomRow([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.removeBottomRow(fixtures.removeBottomRow.emptyMatrix.inputValue);
      var expected = fixtures.removeBottomRow.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a 1x1 matrix', function(){
      var result = spiral.removeBottomRow(fixtures.removeBottomRow.oneByOne.inputValue);
      var expected = fixtures.removeBottomRow.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a 1xm matrix', function(){
      var result = spiral.removeBottomRow(fixtures.removeBottomRow.oneRow.inputValue);
      var expected = fixtures.removeBottomRow.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return matrix with bottom row removed if given a nx1 matrix', function(){
      var result = spiral.removeBottomRow(fixtures.removeBottomRow.oneColumn.inputValue);
      var expected = fixtures.removeBottomRow.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with bottom removed if given a nxm matrix', function(){
      var result = spiral.removeBottomRow(fixtures.removeBottomRow.manyRows.inputValue);
      var expected = fixtures.removeBottomRow.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('takeLeftColumn()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.takeLeftColumn([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.takeLeftColumn(fixtures.takeLeftColumn.emptyMatrix.inputValue);
      var expected = fixtures.takeLeftColumn.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one element array if given a 1x1 matrix', function(){
      var result = spiral.takeLeftColumn(fixtures.takeLeftColumn.oneByOne.inputValue);
      var expected = fixtures.takeLeftColumn.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a 1xm matrix', function(){
      var result = spiral.takeLeftColumn(fixtures.takeLeftColumn.oneRow.inputValue);
      var expected = fixtures.takeLeftColumn.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return an n length array if given a nx1 matrix', function(){
      var result = spiral.takeLeftColumn(fixtures.takeLeftColumn.oneColumn.inputValue);
      var expected = fixtures.takeLeftColumn.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return one array if given a nxm matrix', function(){
      var result = spiral.takeLeftColumn(fixtures.takeLeftColumn.manyRows.inputValue);
      var expected = fixtures.takeLeftColumn.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('removeLeftColumn()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.removeLeftColumn([[]]);
      });
    });
    it('should return an empty matrix if given an empty matrix', function(){
      var result = spiral.removeLeftColumn(fixtures.removeLeftColumn.emptyMatrix.inputValue);
      var expected = fixtures.removeLeftColumn.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a 1x1 matrix', function(){
      var result = spiral.removeLeftColumn(fixtures.removeLeftColumn.oneByOne.inputValue);
      var expected = fixtures.removeLeftColumn.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return matrix with right column removed if given a 1xm matrix', function(){
      var result = spiral.removeLeftColumn(fixtures.removeLeftColumn.oneRow.inputValue);
      var expected = fixtures.removeLeftColumn.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return empty array if given a nx1 matrix', function(){
      var result = spiral.removeLeftColumn(fixtures.removeLeftColumn.oneColumn.inputValue);
      var expected = fixtures.removeLeftColumn.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return matrix with right column removed if given a nxm matrix', function(){
      var result = spiral.removeLeftColumn(fixtures.removeLeftColumn.manyRows.inputValue);
      var expected = fixtures.removeLeftColumn.manyRows.outputExpected;
      assert.deepEqual(result, expected);
    });
  });

  describe('traverseClockwise()', function(){
    it('should exist', function(){
      assert.doesNotThrow(function(){
        spiral.traverseClockwise([[]]);
      });
    });
    it('should return an empty array if given an empty matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.emptyMatrix.inputValue);
      var expected = fixtures.traverseClockwise.emptyMatrix.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with 1 element if given a 1x1 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.oneByOne.inputValue);
      var expected = fixtures.traverseClockwise.oneByOne.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 3 elements if given a 1x3 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.oneRow.inputValue);
      var expected = fixtures.traverseClockwise.oneRow.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 3 elements if given a 3x1 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.oneColumn.inputValue);
      var expected = fixtures.traverseClockwise.oneColumn.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 4 elements if given a 2x2 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.twoByTwo.inputValue);
      var expected = fixtures.traverseClockwise.twoByTwo.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 3x3 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.threeByThree.inputValue);
      var expected = fixtures.traverseClockwise.threeByThree.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 3x4 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.threeByFour.inputValue);
      var expected = fixtures.traverseClockwise.threeByFour.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 4x4 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.fourByFour.inputValue);
      var expected = fixtures.traverseClockwise.fourByFour.outputExpected;
      assert.deepEqual(result, expected);
    });
    it('should return array with correct order and 9 elements if given a 4x5 matrix', function(){
      var result = spiral.traverseClockwise(fixtures.traverseClockwise.fourByFive.inputValue);
      var expected = fixtures.traverseClockwise.fourByFive.outputExpected;
      assert.deepEqual(result, expected);
    });
  });
});
