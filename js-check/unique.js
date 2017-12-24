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

const filter = (array, callback) => {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      arr.push(array[i]);
    }
  }
  return arr;
};

const isSameArr = (arr1, arr2) => {
  let state = true;
  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
      if (arr1[i] !== arr2[i]) {
        state = false;
        break;
      } else {
        state = true;
      }
    }
  } else {
    return false;
  }
  return state;
};

const isSameObj = (obj1, obj2) => {
  let state = true;
  let obj1Keys = Object.keys(obj1);
  let obj2Keys = Object.keys(obj2);
  if (obj1Keys.length === obj2Keys.length) {
    for (let i = 0; i < obj1Keys.length; i++) {
      if (obj1Keys[i] === obj2Keys[i] && obj1[obj1Keys[i]] === obj2[obj2Keys[i]]) {
        state = true;
      } else {
        return false;
      }
    }
  } else {
    return false;
  }
  return state;
};

const getLastUnique = (item, index, list) => {
  for (let i = list.length -1; i >= 0; i--) {
    if (Array.isArray(list[i]) && isSameArr(item, list[i])) {
      if (index === i) {
        return true;
        break;
      } else {
        break;
      }
    }
    else if (typeof list[i] === 'object' && list[i] !== null && isSameObj(item, list[i])) {
      if (index === i) {
        return true;
        break;
      } else {
        break;
      }
    }
  }
};

const unique = (arr) => {
  return filter(arr, function (elem, index, list) {
    if (Array.isArray(elem)) {
      return getLastUnique(elem, index, list);
    } else if (typeof elem === 'object' && elem !== null) {
      return getLastUnique(elem, index, list);
    } else {
      return elem === list[list.lastIndexOf(elem)] && index === list.lastIndexOf(elem);
    }
  });
};

module.exports = unique;
// Note: It's not neccessary to have all code into the 'unique'
// function. Feel free to make as many functions as you see
// fit. Just be sure to leave unique as an exported
// method as you found it
