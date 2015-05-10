var fixtures = {};

//fixtures for takeTopRow tests
fixtures.takeTopRow = {};
fixtures.takeTopRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.takeTopRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
}
fixtures.takeTopRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
}
fixtures.takeTopRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1]
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
fixtures.removeTopRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
}
fixtures.removeTopRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: []
}
fixtures.removeTopRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [[2],[3]]
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
fixtures.takeRightColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
}
fixtures.takeRightColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [3]
}
fixtures.takeRightColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
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
fixtures.removeRightColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
}
fixtures.removeRightColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [[1,2]]
}
fixtures.removeRightColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: []
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

//fixtures for takeBottomRow tests
fixtures.takeBottomRow = {};
fixtures.takeBottomRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.takeBottomRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
}
fixtures.takeBottomRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
}
fixtures.takeBottomRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [3]
}
fixtures.takeBottomRow.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [7,8,9]
}

//fixtures for removeBottomRow tests
fixtures.removeBottomRow = {};
fixtures.removeBottomRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.removeBottomRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
}
fixtures.removeBottomRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: []
}
fixtures.removeBottomRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [[1],[2]]
}
fixtures.removeBottomRow.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [
    [1,2,3],
    [4,5,6]
  ]
}

//fixtures for takeLeftColumn tests
fixtures.takeLeftColumn = {};
fixtures.takeLeftColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.takeLeftColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
}
fixtures.takeLeftColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1]
}
fixtures.takeLeftColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
}
fixtures.takeLeftColumn.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [1,4,7]
}

//fixtures for removeLeftColumn tests
fixtures.removeLeftColumn = {};
fixtures.removeLeftColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
}
fixtures.removeLeftColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
}
fixtures.removeLeftColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [[2,3]]
}
fixtures.removeLeftColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: []
}
fixtures.removeLeftColumn.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [
    [2,3],
    [5,6],
    [8,9]
  ]
}

module.exports = fixtures;
