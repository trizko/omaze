var spiral = require('../src/spiralTraversal');
var assert = require('assert');

describe('Spiral Traversal', function(){
  describe('takeTopRow()', function(){
    it('should exist', function(){
      assert.doesNotThrow(spiral.takeTopRow);
    });
  });
});
