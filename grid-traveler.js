/* given the row = m and column = n of a grid calculate the number of ways 
you can reach the end of from the first block provided you can only move down or right */

//without memoization
// time complexity O(2^n+m)
const gridTraveler = (m, n) => {
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

//with memoization
const gridTravelerM = (m, n, memo = {}) => {
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTravelerM(m - 1, n, memo) + gridTravelerM(m, n - 1, memo);
  return memo[key];
};
