/* jshint esversion: 6 */

// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  if (n === 0) {
    return 1;
  }

  if (n < 0) {
    return null;
  }

  return n * factorial(n - 1);
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  if (!array.length) {
    return 0;
  }

  return array[0] + sum(array.slice(1));
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
  var sum = 0;

  array.forEach(function(ele) {
    if (Array.isArray(ele)) {
      sum += arraySum(ele);
    } else {
      sum += ele;
    }
  });

  return sum;
};

// 4. Check if a number is even.
var isEven = function(n) {
  n = n > 0 ? n - 2 : n + 2;

  if (n === 0) {
    return true;
  } else if (n === -1 || n === 1) {
    return false;
  }

  return isEven(n); 
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 0) {
    return 0;
  }

  n = n > 0 ? n - 1 : n + 1;

  return n + sumBelow(n);
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  var result = [];
  if (x + 1 === y || x - 1 === y || x === y) {
    return result;
  }

  x = x < y ? x + 1 : x - 1;

  result.push(x);

  return result.concat(range(x, y));
};

// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }

  exp = exp > 0 ? exp - 1 : exp + 1;

  return base * exponent(base, exp);
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {

};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  if (string.length === 0) {
    return "";
  }

  return string[string.length - 1] + reverse(string.slice(0, string.length - 1));
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
  string = string.toLowerCase().replace(/ /g, "");

  if (!string) {
    return true;
  }

  return string[0] === string[string.length - 1] && palindrome(string.slice(1, string.length - 1));
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
  
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.
var multiply = function(x, y) {
  // if (y === 1) {
  //   return x;
  // }

  // return x + multiply(x, y - 1);
};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  if (str1.length === 0 || str2.length === 0) {
    if (str1 === "" && str2 === "") {
      return true;
    } else if (str1.length === 0 && str2.length !== 0 || str1.length !== 0 && str2.length === 0) {
      return false;
    }
  }


  return str1[0] === str2[0] && compareStr(str1.slice(1), str2.slice(1));
};

// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
  var arr = [];

  if(str.length === 0) {
    return arr;
  }

  arr.push(str[0]);
  arr = arr.concat(createArray(str.slice(1)));

  return arr;
};

// 17. Reverse the order of an array
var reverseArr = function (array) {
  var arr = [];

  if (array.length === 0) {
    return arr;
  }

  arr.push(array[array.length - 1]);
  arr = arr.concat(reverseArr(array.slice(0, array.length - 1)));

  return arr;
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var arr = [];

  if (length === 0) {
    return arr;
  }

  arr.push(value);
  arr = arr.concat(buildList(value, length - 1));

  return arr;
};

// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var count = 0;

  if (array.length === 0) {
    return count;
  } else if (array[0] === value) {
    count++;
  }

  count += countOccurrence(array.slice(1), value);

  return count;
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  var arr = [];

  if (array.length === 0) {
    return arr;
  }

  arr.push(callback(array[0]));

  arr = arr.concat(rMap(array.slice(1), callback));

  return arr;
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var count = 0;

  for (var objKey in obj) {
    if (objKey === key) {
      count++;
    } else if (typeof obj[objKey] === 'object') {
      count += countKeysInObj(obj[objKey], key);
    }
  }

  return count;
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
  var count = 0;

  for (var key in obj) {
    if (obj[key] === value) {
      count++;
    } else if (typeof obj[key] === 'object') {
      count += countValuesInObj(obj[key], value);
    }
  }

  return count;
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
  for (var objKey in obj) {
    if (objKey === key) {
      obj[newKey] = obj[objKey];
      delete obj[objKey];
    } else if (typeof obj[objKey] === 'object') {
      replaceKeysInObj(obj[objKey], key, newKey)
    }
  }

  return obj;
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {

};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var results = [];

  if(array.length === 0) {
    return results;
  }

  results.push(array[0].toUpperCase());
  debugger;
  results = results.concat(capitalizeWords(array.slice(1)));

  return results;
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  if (array.length === 0) { return []; };
  var results = [];
  var word = array[0];
  var capitalized = word[0].toUpperCase() + word.slice(1);

  results.push(capitalized);
  results = results.concat(capitalizeFirst(array.slice(1)));

  return results;
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;

  for (var key in obj) {
    if (typeof obj[key] === 'object') {
      sum += nestedEvenSum(obj[key]);
    } else if (obj[key] % 2 === 0) {
        sum += obj[key];
    }
  }

  return sum;
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
  var results = [];

  arrays.forEach(function(ele) {
    if (Array.isArray(ele)) {
      results = results.concat(flatten(ele));
    } else {
      results.push(ele);
    }
  });

  return results;
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  if (str.length === 0) {
    return obj;
  }

  obj = obj || {};
  var letter = str[0];

  obj[letter] = obj[letter] ? obj[letter] + 1 : 1;
  debugger;

  obj = letterTally(str.slice(1), obj);

  return obj;
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {

};

// 32. Augument every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
  var results = [];
  if (array.length === 0) {
    return results;
  }

  var element = array[0];
  element.push(aug);
  results.push(element);

  results = results.concat(augmentElements(array.slice(1), aug));

  return results;
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {

};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
};


// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'
// https://www.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
// https://www.khanacademy.org/computing/computer-science/algorithms/merge-sort/a/divide-and-conquer-algorithms
var mergeSort = function(array) {
};
