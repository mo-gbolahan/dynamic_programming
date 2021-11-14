// Write a function that takes in a number and an array of numbers as argumnets

// The function should return an array containing any combination of element that adds up tp exactly the target number.

// If there is no combination that adds up to the EventTarget, then return null

// If there are multiple combinations possible, you may return any single one.


const howSum = (targetSum, num, memo={}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;
    
    for ( let n of num) {
        const remainder = targetSum - n;
        const remainderResult = howSum(remainder, num, memo);
        if (remainderResult !== null) {
        memo[targetSum] =  [...remainderResult, n];
        return memo[targetSum];
        };
 };
    memo[targetSum] = null;
    return null;
};


console.log(howSum(300, [1,2]))