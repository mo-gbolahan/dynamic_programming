// Write a function that accepts a target string and an array of strings

// The function should return a 2D array containing all the ways that the target can be constructed by contatenating elements of the wordBank.

// Each element of the 2D array should represent one combination that construct the target

// You may reuse elements of the string array as many times as needed.




const allConstruct = (target, wordBank) => {
    const table = Array(target.length + 1) 
        .fill()
        .map(() => []);

    table[0] = [ [] ];

    for (let i = 0; i <= target.length; i++) {
        for (let word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const newCombination = table[i].map(subArray => [...subArray, word]);
                table[i + word.length].push(...newCombination);
            };
        };
    };

    return table
};



console.log(allConstruct('abcdef', ['ab', 'abc', 'cd','b', 'def', 'abcd']));
console.log(allConstruct('purple', ['urp', '', 'le', 'ur', 'urpl']));
/* console.log(allConstruct('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab',
 [
    'a',
    'aa',
    'aaa',
    'aaaaa',
    'aaaaaaaaa'
])); */
