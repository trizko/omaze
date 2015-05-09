var spiral = require('../src/spiralTraversal');
var assert = require('assert');

describe('Spiral Traversal', function(){
  it('should have a method for removing the top row of a matrix', function(){
    assert.doesNotThrow(spiral.takeTopRow);
  });
});
