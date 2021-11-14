// Write a function that takes a target number and an array of numbers as arguments

// The function should return a boolean indicating whether or not it is possible to generate the target number for the array
// You can use the numbers in the array as many times as you want
// You may assume all input are nonnegative numbers

// const canSum = (target, num) => {
//     // base cases
//     if (target === 0) return true;
//     if (target < 0) return false;

//     for (n of num) {
//         remainder = target - n;
//         if (canSum(remainder, num) === true) {
//             return true
//         };
//     };
//     return false;
// };

// Memoization
const canSum = (target, num, memo={}) => {
    if (target in memo) return memo[target];
    // base cases
    if (target === 0) return true;
    if (target < 0) return false;

    for (n of num) {
        remainder = target - n;
        if (canSum(remainder, num, memo) === true) {

            memo[target] = true;
            return memo[target];
        };
    };
    memo[target] = false;

    return memo[target];

};




console.log(canSum(279, [2,14]))