/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  //input: array of numbers and a target number
  //output: the two numbers indexes from the array that when added equal target 
  //constraints: can not use same number twice
  let hashTable = {}; //create a hashtable to store values and their indexes
  for (let i = 0; i <= nums.length; i++) { //loop through array of nums
    let currentNum = nums[i]; //set currentNum
    let desiredNum = target - nums[i]; //subtract currentNum from target to figure out what number we are looking for
    let desiredNumHash = hashTable[desiredNum]; //set desiredNumHash to value of that number key in the hash
    if (hashTable[desiredNum] !== undefined) { //if that value exists
        return [i, nums.indexOf(desiredNum)]; //return the two indexes
    } else { //if that value doesn't exist
        hashTable[currentNum] = i; //add that value and it's index to the hash table
    }
  }
};

console.log(twoSum([2,3,4,5], 6)); // [4,2]
console.log(twoSum([5,2,7,43], 45)); // [2,43]
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  //input: a 32 bit interger //ex: 403
  //output: input interger reversed //ex: 304
  //constraints: if -231 <= x <= 231 - 1 then return 0
  const reversed = parseInt(Math.abs(x).toString().split('').reverse().join('')); //wrapping it in parseInt turns it into an interger again
  if (reversed > 2**31) return 0;
  return reversed * Math.sign(x); //Math.sign adds onto the multiplied value the sign of the input value
};

console.log(reverse(403)); // 304
console.log(reverse(694827)); // 728496

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  //input: a number
  //output: a boolean on wether that number is a palindrome or not
    const helper = (num) => { //recursive helper
      if (num.length === 1 || !num.length) { //base case
        return true;
      } else { //recursive case
        if (num[0] === num[num.length - 1]) {
          let newNum = num.slice(1,-1);
          return helper(newNum);
        } else {
          return false;
        }
      }
    }
    return helper(x.toString());
};

console.log(isPalindrome(5566776655)); // true
console.log(isPalindrome(45673)); // false

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  //input: a roman numeral (ex: 'III')
  //output: the input roman numeral converted to integer (ex: 3)
  /*
  Symbol       Value
    I             1
    V             5
    X             10
    L             50
    C             100
    D             500
    M             1000
  */
  const key = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  if (key[s]) return key[s];

  for (let i = 0; i < s.length; i++) {
    let count = key[s[0]];
  };
};
