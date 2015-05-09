var fixtures = {};

//fixtures for takeTopRow tests
fixtures.takeTopRow = {};
fixtures.takeTopRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.takeTopRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
}
fixtures.takeTopRow.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9] 
  ],
  outputExpected: [1,2,3]
}

module.exports = fixtures;
