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

//fixtures for takeRightColumn tests
fixtures.takeRightColumn = {};
fixtures.takeRightColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.takeRightColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [3]
}
fixtures.takeRightColumn.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [3,6,9]
}

//fixtures for removeRightColumn tests
fixtures.removeRightColumn = {};
fixtures.removeRightColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.removeRightColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [[1,2]]
}
fixtures.removeRightColumn.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [
    [1,2],
    [4,5],
    [7,8]
  ]
}

module.exports = fixtures;
