// Write a function that takes in a number and an array of numbers as argumnets

// The function should return an array containing the best combination of element that adds up tp exactly the target number.

// If there is a tie for the shortest combination, you may return anyone of the shortest.

const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];

    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    // making the shortestCombination = null cause there might eventually not be any combination.
    let shortestConbination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);

        if (remainderCombination !== null) {
           const combination =  [...remainderCombination, num];

            // if the combination is shorter the the shortestConbination and updating the shortestCombination
            if (shortestConbination === null || combination.length < shortestConbination.length) {
                shortestConbination = combination;
            };
        };
    };
    memo[targetSum] = shortestConbination;
    return shortestConbination;
};




console.log(bestSum(100, [2, 4,7]))