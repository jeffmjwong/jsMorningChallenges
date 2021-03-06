/*
Find Last Index
Like _.findIndex but iterates the array in reverse, returning the index closest
to the end where the predicate truth test passes.
Example:
const users = [{'id': 1, 'name': 'Bob', 'last': 'Brown'},
             {'id': 2, 'name': 'Ted', 'last': 'White'},
             {'id': 3, 'name': 'Frank', 'last': 'James'},
             {'id': 4, 'name': 'Ted', 'last': 'Jones'}];
_.findLastIndex(users, {
  name: 'Ted'
});
=> 3
*/

// Your code here!
const findLastIndex = (array, object) => {
  for (let index = (array.length - 1); index >= 0; index--) {
    for (const key in array[index]) {
      if (array[index][key] === object[key]) {
        return index;
      }
    }
  }
}

// Check your solution by running these tests: mocha *this_filename*
const assert = require('assert');

describe('Find Last Index', () => {
  it('finds the last index', () => {
    const objects = [
      {a: 0, b: 0},
      {a: 1, b: 1},
      {a: 2, b: 2},
      {a: 0, b: 0}
    ];
    const result = findLastIndex(objects, {a: 0});
    assert.equal(result, 3);
  })
});
