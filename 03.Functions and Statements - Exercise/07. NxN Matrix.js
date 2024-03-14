function printMatrix(n) {
    // Create an empty matrix
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = [];
        for (let j = 0; j < n; j++) {
            row.push(n);
        }
        matrix.push(row);
    }
    for (let row of matrix) {
        console.log(row.join(' '));
    }
}