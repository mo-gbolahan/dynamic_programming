// Say you're a traveller on a 2D grid, you begin in the top-left corner and your goal is to move to the bottom-right. You can only move down and right

// In how manu ways can you travel to the goal on the  grid with m * n dimension

// const gridTraveller = (m,n) => {
//     // declearing the base cases
//     if (m === 1 && n ===1) return 1;
//     if (m === 0 || n === 0) return 0;

//     // going down the level
//     return gridTraveller(m - 1, n) + gridTraveller(m, n - 1);

// };


// Memoization
const gridTraveller = (m, n, memo={}) => {
    // concatenating the args to a sinlge value
     const key = `${m},${n}`;
   
   

    if (key in memo) return memo[key];

    // declearing the base cases
    if (m === 1 && n ===1) return 1;
    if (m === 0 || n === 0) return 0;

    // going down the level
    memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
   
    return memo[key];
};

console.log(gridTraveller(3,2));