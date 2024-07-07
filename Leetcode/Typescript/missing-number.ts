function missingNumber(nums: number[]): number {
    const sorted: number[] = nums.sort((a, b) => a - b);
    let start: number = 0;
    let end: number = sorted.length - 1;
    
    // Binary search
    while (start <= end) {
        let middle: number = Math.floor((start + end) / 2);

        if (sorted[middle] === middle) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }

        if (start > end) {
            return start;
        }
    }
    
    return -1;
};