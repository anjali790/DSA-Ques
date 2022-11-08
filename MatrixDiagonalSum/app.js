var diagonalSum = function (mat) {
    let firstDiagonal = 0, secondDiagonal = 0;
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat.length; j++) {
            if (i == j) {
                firstDiagonal += mat[i][j];
            } else if (i + j == mat.length - 1) {
                secondDiagonal += mat[i][j];
            }
        }
    }
    return sum = firstDiagonal + secondDiagonal;
};
console.log(diagonalSum([[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1],
[1, 1, 1, 1]]))