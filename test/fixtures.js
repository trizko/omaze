var fixtures = {};

//fixtures for takeTopRow tests
fixtures.takeTopRow = {};
fixtures.takeTopRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.takeTopRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.takeTopRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
};
fixtures.takeTopRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1]
};
fixtures.takeTopRow.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [1,2,3]
};

//fixtures for removeTopRow tests
fixtures.removeTopRow = {};
fixtures.removeTopRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.removeTopRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
};
fixtures.removeTopRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: []
};
fixtures.removeTopRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [[2],[3]]
};
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
};

//fixtures for takeRightColumn tests
fixtures.takeRightColumn = {};
fixtures.takeRightColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.takeRightColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.takeRightColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [3]
};
fixtures.takeRightColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
};
fixtures.takeRightColumn.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [3,6,9]
};

//fixtures for removeRightColumn tests
fixtures.removeRightColumn = {};
fixtures.removeRightColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.removeRightColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
};
fixtures.removeRightColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [[1,2]]
};
fixtures.removeRightColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: []
};
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
};

//fixtures for takeBottomRow tests
fixtures.takeBottomRow = {};
fixtures.takeBottomRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.takeBottomRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.takeBottomRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
};
fixtures.takeBottomRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [3]
};
fixtures.takeBottomRow.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [7,8,9]
};

//fixtures for removeBottomRow tests
fixtures.removeBottomRow = {};
fixtures.removeBottomRow.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.removeBottomRow.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
};
fixtures.removeBottomRow.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: []
};
fixtures.removeBottomRow.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [[1],[2]]
};
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
};

//fixtures for takeLeftColumn tests
fixtures.takeLeftColumn = {};
fixtures.takeLeftColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.takeLeftColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.takeLeftColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1]
};
fixtures.takeLeftColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
};
fixtures.takeLeftColumn.manyRows = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [1,4,7]
};

//fixtures for removeLeftColumn tests
fixtures.removeLeftColumn = {};
fixtures.removeLeftColumn.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.removeLeftColumn.oneByOne = {
  inputValue: [[1]],
  outputExpected: []
};
fixtures.removeLeftColumn.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [[2,3]]
};
fixtures.removeLeftColumn.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: []
};
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
};

//fixtures for traverseClockwise tests
fixtures.traverseClockwise = {};
fixtures.traverseClockwise.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.traverseClockwise.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.traverseClockwise.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
};
fixtures.traverseClockwise.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
};
fixtures.traverseClockwise.twoByTwo = {
  inputValue: [
    [1,2],
    [3,4]
  ],
  outputExpected: [1,2,4,3]
};
fixtures.traverseClockwise.threeByThree = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [1,2,3,6,9,8,7,4,5]
};
fixtures.traverseClockwise.threeByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12]
  ],
  outputExpected: [1,2,3,4,8,12,11,10,9,5,6,7]
};
fixtures.traverseClockwise.fourByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12],
    [13 ,14 ,15 ,16]
  ],
  outputExpected: [1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]
};
fixtures.traverseClockwise.fourByFive = {
  inputValue: [
    [1  ,2  ,3  ,4  ,5],
    [6  ,7  ,8  ,9  ,10],
    [11 ,12 ,13 ,14 ,15],
    [16 ,17 ,18 ,19 ,20],
  ],
  outputExpected: [1,2,3,4,5,10,15,20,19,18,17,16,11,6,7,8,9,14,13,12]
};

//fixtures for traverseCounterClockwise tests
fixtures.traverseCounterClockwise = {};
fixtures.traverseCounterClockwise.emptyMatrix = {
  inputValue: [[]],
  outputExpected: []
};
fixtures.traverseCounterClockwise.oneByOne = {
  inputValue: [[1]],
  outputExpected: [1]
};
fixtures.traverseCounterClockwise.oneRow = {
  inputValue: [[1,2,3]],
  outputExpected: [1,2,3]
};
fixtures.traverseCounterClockwise.oneColumn = {
  inputValue: [[1],[2],[3]],
  outputExpected: [1,2,3]
};
fixtures.traverseCounterClockwise.twoByTwo = {
  inputValue: [
    [1,2],
    [3,4]
  ],
  outputExpected: [1,3,4,2]
};
fixtures.traverseCounterClockwise.threeByThree = {
  inputValue: [
    [1,2,3],
    [4,5,6],
    [7,8,9]
  ],
  outputExpected: [1,4,7,8,9,6,3,2,5]
};
fixtures.traverseCounterClockwise.threeByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12]
  ],
  outputExpected: [1,5,9,10,11,12,8,4,3,2,6,7]
};
fixtures.traverseCounterClockwise.fourByFour = {
  inputValue: [
    [1  ,2  ,3  ,4],
    [5  ,6  ,7  ,8],
    [9  ,10 ,11 ,12],
    [13 ,14 ,15 ,16]
  ],
  outputExpected: [1,5,9,13,14,15,16,12,8,4,3,2,6,10,11,7]
};
fixtures.traverseCounterClockwise.fourByFive = {
  inputValue: [
    [1  ,2  ,3  ,4  ,5],
    [6  ,7  ,8  ,9  ,10],
    [11 ,12 ,13 ,14 ,15],
    [16 ,17 ,18 ,19 ,20],
  ],
  outputExpected: [1,6,11,16,17,18,19,20,15,10,5,4,3,2,7,12,13,14,9,8]
};


module.exports = fixtures;
