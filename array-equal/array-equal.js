/*

  Array Equal takes two arrays and returns true if they are identical.
  Note: The arrays will only contain strings or numbers.

  Examples:
  arrayEqual([1,2,3], [1,2,3]) -> true
  arrayEqual([1,2,3], [2,3,4]) -> false
  arrayEqual([1,2,3,4], [1,2,3]) -> false
  arrayEqual([1,2,3], [1,2,3,4]) -> false
  arrayEqual([], []) -> true
  arrayEqual(["hi"], ["hello"]) -> false
  arrayEqual(["1","2","3"], [1,2,3]) -> false

  Check your solution:  Open index.html to run the tests!

*/

function arrayEqual(a, b) {
  /* your code here */
  a = JSON.stringify(a);
  b = JSON.stringify(b);
  return a === b;
}

const a = [1,2,3];
const aa = JSON.stringify(a);
const b = [1,2,3];
const bb = JSON.stringify(b);

console.log(a === b); // false
console.log(aa === bb); // true
