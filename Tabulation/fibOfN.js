
// 1. First create a table.
// 2. Assign a value, e.g 0, to the elements of the table.
// 3. Assign particular value to the starting point.
// 4. Use an iterative strategy instaed of recussive strategy


const fib = (n) => {
    // First create a table.
    // Assign a value, e.g 0, to the elements of the table.
    const table = Array(n +1).fill(0);

    // Assign particular value to the starting point
    table[1] = 1;

    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }

    return table[n];
};


console.log(fib(6))