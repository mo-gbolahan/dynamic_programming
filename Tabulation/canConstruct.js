// Write a function that accepts a target string and an array of strings

// The function should return a boolean indicating wheather or not the target can be construted by concatenating elements of the string array.

// You may reuse elements of the string array as many times as needed.



const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length)=== word) {
                    table[i + word.length] = true;
                };
            };
        };
        
    };
    return table[target.length]
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