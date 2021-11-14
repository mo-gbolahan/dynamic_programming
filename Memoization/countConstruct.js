// Write a function that accepts a target string and an array of strings

// The function should return the total number of ways that the 'target string' can be constructed from the wordBank.

// You may reuse elements of the string array as many times as needed.




const countConstruct = (target, wordBank, memo={}) => {
    if (target in  memo) return memo[target];
    // base case
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        // check if the word in the wordBank is a prefix of the target
        if (target.indexOf(word) === 0) {
           const surfix = target.slice(word.length);
            const numWay = countConstruct(surfix, wordBank, memo);
            totalCount += numWay;
        };
    };
    memo[target] = totalCount;
    return totalCount;
};


console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(countConstruct('purple', ['purp', 'p', 'le', 'ur', 'purpl']));
console.log(countConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
 [
    'a',
    'aa',
    'aaa',
    'aaaaa',
    'aaaaaaaaa'
]));
