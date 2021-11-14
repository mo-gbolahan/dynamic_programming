// Write a function that accepts a target string and an array of strings

// The function should return the total number of ways that the 'target string' can be constructed from the wordBank.

// You may reuse elements of the string array as many times as needed.


const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                table[i + word.length] += table[i];
            };   
        };
        
    };
    return table[target.length];
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
