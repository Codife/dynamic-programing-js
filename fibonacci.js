//print the nth number of the fibMonacci sequence


// without memoization
// Time complexity O(2^n)

const fib = (n) => {
    if (n <= 2) return 1
    return fib(n - 1) + fib(n - 2)
}


// with memoiazation
// Time complexity O(2n)

const fibM = (n, memo = {}) => {
    if (n in memo) return memo[n]
    if (n <= 2) return 1
    memo[n] = fibM(n - 1, memo) + fibM(n - 2, memo)
    return memo[n]
}


