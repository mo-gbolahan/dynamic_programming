// Write a function that takes in a number and an array of numbers as argumnets

// The function should return an array containing any combination of element that adds up tp exactly the target number.

// If there is no combination that adds up to the EventTarget, then return null

// If there are multiple combinations possible, you may return any single one.


const howSum = (target, numbers) => {
    const table = Array(target + 1).fill(null);
    table[0] = [];
    for (let i = 0; i <= target; i++) {
       if (table[i] !== null) {
            for(let num of numbers) {
                table[i +  num] = [...table[i], num];
            };
       };
        
    };

    return table[target];
};



console.log(howSum(7, [2, 3, 4]));