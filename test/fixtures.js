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

module.exports = fixtures;
