// Write a function that accepts a target string and an array of strings

// The function should return a boolean indicating wheather or not the target can be construted by concatenating elements of the string array.

// You may reuse elements of the string array as many times as needed.

const canConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return true;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const surfix = target.slice(word.length);
            if (canConstruct(surfix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            };
        }
    };

    memo[target] = false;
    return false;
};


console.log(canConstruct('abcdef', ['ab', 'edf', 'cde', 'f']));
console.log(canConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
 [
    'a',
    'aa',
    'aaa',
    'aaaaa',
    'aaaaaaaaa'
]));