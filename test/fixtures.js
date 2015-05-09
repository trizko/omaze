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

//fixtures for removeTopRow tests
fixtures.removeTopRow = {};
fixtures.removeTopRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.removeTopRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: []
}
fixtures.removeTopRow.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [
    [4,5,6],
    [7,8,9]
  ]
}

module.exports = fixtures;
