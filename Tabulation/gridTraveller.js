// Say you're a traveller on a 2D grid, you begin in the top-left corner and your goal is to move to the bottom-right. You can only move down and right

// In how manu ways can you travel to the goal on the  grid with m * n dimension

const gridTraveller = (m, n) => {
    // making an  m*n array
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    
    // base case
    table[1][1] = 1;
    
    for (let i = 0; i <= m; i++) {

        for (let j = 0; j <= n; j++) {

            const current = table[i][j];

            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
            
        };
        
    };
    


    return table[m][n];
};






console.log(gridTraveller(3, 3));