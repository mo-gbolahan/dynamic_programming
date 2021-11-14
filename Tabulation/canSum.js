// Write a function that takes a target number and an array of numbers as arguments

// The function should return a boolean indicating whether or not it is possible to generate the target number for the array
// You can use the numbers in the array as many times as you want
// You may assume all input are nonnegative numbers



const canSum = (target, numbers) => {

    const table = Array(target + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
              if (num + i < target) {
                  table[i + num] = true; 
              } 
            };
        };
        
    };
    console.log(table)
    return table[target];

};





console.log(canSum(7, [ 3, 4]));