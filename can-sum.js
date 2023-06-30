/* 
    Write a function canSum(targetSum, numbers)` that takes in a
    targetSum and an array of numbers as arguments.
    The function should return a boolean indicating whether or not it
    is possible to generate the targetSum using numbers from the array.
    You may use an element of the array as many times as needed.
    You may assume that all input numbers are nonnegative.
*/

//time complexity O(numbers.length^targetSum)
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers)) return true;
  }
  return false;
};

//time complexity O(numbers.length*targetSum)
const canSumM = (targetSum, numbers, memo) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSumM(remainder, numbers, memo)) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
