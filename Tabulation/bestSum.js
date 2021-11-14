// Write a function that takes in a number and an array of numbers as argumnets

// The function should return an array containing the best combination of element that adds up tp exactly the target number.

// If there is a tie for the shortest combination, you may return anyone of the shortest.


const bestSum = (target, numbers) => {
    table = Array(target + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= target; i++) {
        if (table[i] !== null) {
            for (num of numbers) {
                const combination =  [...table[i], num];

                // if current is shorter or combination
                if (!table[i + num] || table[num + i].length > combination.lenght ) {
                    table[i + num] = combination;
                }
                
            }
            
        }
    };

    return table[target];
};




console.log(bestSum(7, [2, 3, 4]));
