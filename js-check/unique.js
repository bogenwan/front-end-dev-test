//
// Make Unique
// Finish the rest of 'unique()' function to remove all
// duplicate entries from a given array and satisfy the test
//
// To pass the test, unique should accept an array and
// handle strings:
// ['hello', 'hello', 'world'] -> ['hello', 'world']
// handle numbers:
// [1,1,2,2,2,3,4,4,5] => [1,2,3,4,5]
// handle nested arrays:
// [[1], [1], [2]] => [[1], [2]]
// handle nested objects:
// [{foo: 'bar'}, {foo: 'bar'}] => [{foo: 'bar'}]
var testArr = [2, 3, 6, 8, 10, 9, 4];

const filter = function (array, callback) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      arr.push(array[i]);
    }
  }
  return arr;
};

const unique = (arr) => {
  return filter(arr, function (value, index, list) {
    return value === list[list.lastIndexOf(value)] && index === list.lastIndexOf(value)
  });
};

console.log(unique(['a','ab','ab','b','b','c']));
console.log(unique([1,2,1,4,3,3,5]));;

module.exports = unique;
// Note: It's not neccessary to have all code into the 'unique'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave unique as an exported
// method as you found it
