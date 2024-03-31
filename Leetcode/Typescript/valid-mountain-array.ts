function validMountainArray(arr: number[]): boolean {
    if (arr.length < 3) return false;
    
    const mountainPeak: number = arr.indexOf(Math.max(...arr));    
    if (mountainPeak === 0 || mountainPeak === arr.length - 1) return false;    
    // check values to the left
    for (let i = mountainPeak; i >= 1; i--) {
        if (arr[i] <= arr[i - 1]) return false;
    }
    // check values to the right
    for (let j = mountainPeak; j < arr.length - 1; j++) {       
        if (arr[j] <= arr[j + 1]) return false;
    }
    return true;
};