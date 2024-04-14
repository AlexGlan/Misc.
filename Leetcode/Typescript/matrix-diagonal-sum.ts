function diagonalSum(mat: number[][]): number {
    let sum: number = 0;
    let left: number = 0;
    let right: number = mat[0].length - 1;

    for (let row = 0; row < mat.length; row++) {
        if (mat.length % 2 !== 0 && row === Math.floor(mat.length / 2)) {
            sum += mat[row][left];
        } else {
            sum += mat[row][left] + mat[row][right];
        }
        left++;
        right--;
    }

    return sum;
};