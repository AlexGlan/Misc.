function islandPerimeter(grid: number[][]): number {
    let perimeter: number = 0;

    for (let i = 0; i < grid.length; i++) {
        
        for (let j = 0; j < grid[i].length; j++) {
            if (grid[i][j] === 1) {
                // Check left
                if (j === 0 || grid[i][j - 1] === 0) perimeter++;
                // Check right
                if (j === grid[i].length - 1 || grid[i][j + 1] === 0) perimeter++;
                // Check top
                if (i === 0 || grid[i - 1][j] === 0) perimeter++;
                // Check bottom
                if (i === grid.length - 1 || grid[i + 1][j] === 0) perimeter++;
            }
        }
    }
    
    return perimeter;
};