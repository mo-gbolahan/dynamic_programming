

// base case
// const f = (n) => {
//     if (n <= 2) return 1;
//     return f(n-1) + f(n-2);
// };

// memoization
const f = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = f(n-1, memo) + f(n-2, memo);
    return memo[n]
};



console.log(f(4));
console.log(f(3));
console.log(f(1476));

// console.log(4)
