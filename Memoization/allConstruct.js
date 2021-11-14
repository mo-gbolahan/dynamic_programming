// Write a function that accepts a target string and an array of strings

// The function should return a 2D array containing all the ways that the target can be constructed by contatenating elements of the wordBank.

// Each element of the 2D array should represent one combination that construct the target

// You may reuse elements of the string array as many times as needed.




const allConstruct = (target, wordBank, memo={}) => {
    if (target in  memo) return memo[target];
    // base case
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        // check if the word in the wordBank is a prefix of the target
        if (target.indexOf(word) === 0) {
            const surfix = target.slice(word.length);
            const surfixWays = allConstruct(surfix, wordBank, memo);
            const targetWays = surfixWays.map(way => [word, ...way]);

            result.push(...targetWays);
        };
    };
    memo[target] = result;
    return result
};


console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd']));
console.log(allConstruct('purple', ['purp', 'p', 'le', 'ur', 'purpl']));
console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
 [
    'a',
    'aa',
    'aaa',
    'aaaaa',
    'aaaaaaaaa'
]));
